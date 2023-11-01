const AssistantV2 = require('ibm-watson/assistant/v2');

const assistant = new AssistantV2({
  version: '2019-02-28',
  authenticator: new IamAuthenticator({
    apikey: 'YOUR_API_KEY',
  }),
  url: 'YOUR_ASSISTANT_URL',
});