import { middyfy } from '@libs/lambda';
import { Pool } from 'pg';

import { formatJSONResponse } from '@libs/api-gateway';
import { authorizer } from '@libs/authorizer';


const getExpenses = async (event) => {
  try {
    const hasPermissions = authorizer(event, ['admin', 'user']);

    if(!hasPermissions) {
      return formatJSONResponse({
        message: 'Unauthorized',
        status: 401
      });
    }

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
    const results = await client.query('SELECT * FROM "Expense"');
    client.release();
  
    return formatJSONResponse({
      status: 200,
      data: results.rows
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

export const main = middyfy(getExpenses);
