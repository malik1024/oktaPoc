export default {
    oidc: {
      clientId: '0oafkl686pfl21cP10h7',
      issuer: 'https://dev-337333.oktapreview.com/oauth2/default',
      redirectUri: 'http://localhost:8080/implicit/callback',
     // redirectUri: window.location.href,
      scope: 'openid profile email',
    },
    resourceServer: {
      messagesUrl: 'http://localhost:8000/api/messages',
    },
  };