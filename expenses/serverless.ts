import type { AWS } from '@serverless/typescript';

import getExpenses from '@functions/getExpenses';
import updateSavings from '@functions/updateSavings';

const serverlessConfiguration: AWS = {
  service: 'expenses',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-middleware'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'us-west-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      DB_DIALECT: process.env.DB_DIALECT,
      DB_NAME: process.env.DB_NAME,
      DB_USERNAME: process.env.DB_USERNAME,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB_HOST: process.env.DB_HOST,
      DB_PORT: process.env.DB_PORT,
    },
  },
  // import the function via paths
  functions: {
    getExpenses,
    updateSavings,
  },
  resources: {
    Resources: {
      MNGAuthentication: {
        Type: 'AWS::ApiGateway::Authorizer',
        Properties: {
          Name: 'MNGAuthentication',
          RestApiId: { Ref: 'ApiGatewayRestApi' },
          Type: 'COGNITO_USER_POOLS',
          IdentitySource: 'method.request.header.Authorization',
          ProviderARNs: ['arn:aws:cognito-idp:us-west-1:279817701152:userpool/us-west-1_8RZctIGfl'],
          // AuthorizerResultTtlInSeconds: 0
        },
      },
      MNGAuthorizer: {
        Type: 'AWS::ApiGateway::Authorizer',
        Properties: {
          Name: 'MNGAuthorizer',
          RestApiId: { Ref: 'ApiGatewayRestApi' },
          Type: 'REQUEST',
          AuthorizerUri: 'arn:aws:apigateway:us-west-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-1:279817701152:function:users-dev-authorization/invocations',
          // AuthorizerResultTtlInSeconds: 0
        },
      },
    },
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
  useDotenv: true,
};

module.exports = serverlessConfiguration;
