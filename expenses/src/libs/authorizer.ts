export const authorizer = (event, resourceGroups) => {
  try {
    const userGroups = event.requestContext.authorizer.claims['cognito:groups'];
    return resourceGroups.some(element => userGroups.includes(element));
  } catch (error) {
    console.log('authorizer:error:', error);
  }
}