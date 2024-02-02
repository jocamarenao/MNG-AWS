export default {
  type: "object",
  properties: {
    username: { type: 'string' },
    accessToken: { type: 'string' },
  },
  required: ['username', 'accessToken']
} as const;
