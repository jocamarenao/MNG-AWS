import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
const AWS = require('aws-sdk');


import schema from './schema';

const cognito = new AWS.CognitoIdentityServiceProvider();

const logOut: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { accessToken } = event.body;

  const params = {
    AccessToken: accessToken,
  };

  try {
    await cognito.globalSignOut(params).promise();
    
    return formatJSONResponse({
      statusCode: 200,
      message: `log out successful`
    });
  } catch (error) {
    return formatJSONResponse({
      message: `log out unsuccessful`,
      error
    });
  }
};

export const main = middyfy(logOut);
