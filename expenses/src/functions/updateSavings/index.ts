import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'patch',
        path: 'savings',
        authorizer: {
          type: 'COGNITO_USER_POOLS', 
          authorizerId: 'iyx8br', 
          claims: ['email', 'cognito:groups'],
        },
        request: {
        },
      },
    },
  ],
};
