import { defineFunction, secret } from '@aws-amplify/backend';

export const graphqlIoTCoreTelemetry = defineFunction({

  environment: {
    API_ENDPOINT: secret('CUSTOM_LAMBDA_GRAPHQL_ENDPOINT'), 
    API_KEY: secret('CUSTOM_LAMBDA_GRAPHQL_KEY') 
  },
  // optionally specify a name for the Function (defaults to directory name)
  name: 'graphqlIoTCoreTelemetry',
  // optionally specify a path to your handler (defaults to "./handler.ts")
  entry: './handler.ts'
});