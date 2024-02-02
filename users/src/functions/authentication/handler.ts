import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
const AWS = require('aws-sdk');


import schema from './schema';

const cognito = new AWS.CognitoIdentityServiceProvider();

const authentication: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const { username, password } = event.body;

  const params = {
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: '429la1390dien9ftmngnu30vte',
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
    },
  };

  try {
    const response = await cognito.initiateAuth(params).promise();

    const data = {
      IdToken: response.AuthenticationResult.IdToken,
      AccessToken: response.AuthenticationResult.AccessToken
    }
    
    return formatJSONResponse({
      statusCode: 200,
      message: `authentication successful`,
      data
    });
  } catch (error) {
    return formatJSONResponse({
      message: `authentication unsuccessful`,
    });
  }
};

export const main = middyfy(authentication);
