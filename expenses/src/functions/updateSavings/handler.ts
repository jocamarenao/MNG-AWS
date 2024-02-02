import { middyfy } from '@libs/lambda';
import { Pool } from 'pg';

import { formatJSONResponse } from '@libs/api-gateway';
import { authorizer } from '@libs/authorizer';


const updateSavings = async (event) => {
  try {
    console.log('event:', event);
    const hasPermissions = authorizer(event, ['admin', 'user']);

    if(!hasPermissions) {
      return formatJSONResponse({
        message: 'Unauthorized',
        status: 401
      });
    }

    const { amount, transferType, id } = event.body;

    console.log('body:', amount, transferType, id);

    const pool = new Pool({
      host: 'mng.c7plbjgi0qel.us-west-1.rds.amazonaws.com',
      port: 5432,
      database: 'mng',
      user: 'postgres',
      password: 'tb3a28uRQF8yio',
      max: 1,
      min: 0,
      idleTimeoutMillis: 120000,
      connectionTimeoutMillis: 10000
    });
  
    // Execute a query on the PostgreSQL database.
    const client = await pool.connect();

   

    
    const results = await client.query('SELECT * FROM "Expense" WHERE id = $1', [id]);
    console.log('results:', results.rowCount);
    
    if (results.rowCount) {
      let newAmount = amount * 100;

      if (transferType === 'withdrawl') {
        newAmount = results.rows[0].savings - newAmount;
      }
      
      if (transferType === 'deposit') {
        newAmount = results.rows[0].savings + newAmount;
      }

      const query = `UPDATE "Expense" SET savings = $1 WHERE id = $2`;

      await client.query(query, [newAmount, id]);

      client.release();
    }

    if (results.rowCount) {
      return formatJSONResponse({
        status: 404,
        message: 'The requested resource was not found'
      });
    }

  
    return formatJSONResponse({
      status: 200,
      message: 'Savings updated successfully'
    });
  } catch (error) {
    console.log('error:', error);
    return formatJSONResponse({
      status: 500,
      message: 'Internal Server Error',
      error
    });
  }
};

export const main = middyfy(updateSavings);
