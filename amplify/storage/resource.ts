import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 's3-browser-demo',
  access: (allow) => ({
    'aws/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write', 'delete'])
       ]
  })
});
