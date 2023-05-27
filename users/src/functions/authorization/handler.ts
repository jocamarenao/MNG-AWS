import { CognitoIdentityServiceProvider } from 'aws-sdk';
import { APIGatewayEvent, APIGatewayAuthorizerResult } from 'aws-lambda';
import { middyfy } from '@libs/lambda';

const cognito = new CognitoIdentityServiceProvider();

const generateAuthResponse = (principalId: string, effect: 'Allow' | 'Deny', resource: string): APIGatewayAuthorizerResult => {
  const authResponse: APIGatewayAuthorizerResult = {
    principalId: principalId,
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: effect,
          Resource: resource,
        },
      ],
    },
  };

  return authResponse;
}

export const authorization = async (event: APIGatewayEvent): Promise<APIGatewayAuthorizerResult> => {
  try {
    console.log('app:event', event);

    const userPoolId = event.requestContext.authorizer.claims['cognito:pool:id'];
    console.log('app:userPoolId', userPoolId);
    const { userGroup } = event.requestContext.authorizer;
    console.log('app:userGroup', userGroup);


    const response = await cognito.adminListGroupsForUser({
      UserPoolId: userPoolId,
      Username: event.requestContext.authorizer.claims['cognito:username'],
    }).promise();

    console.log('app:response', response);
    
    const isUserInGroup = response.Groups.some(group => group.GroupName === userGroup);
    console.log('app:isUserInGroup', isUserInGroup);

    if (isUserInGroup) {
      return generateAuthResponse('user', 'Allow', event.httpMethod);
    } else {
      return generateAuthResponse('user', 'Deny', event.httpMethod);
    }
  } catch (error) {
    console.error('Error:', error);
    return generateAuthResponse('user', 'Deny', event.httpMethod);
  }
};

export const main = middyfy(authorization);
