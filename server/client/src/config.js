const oktaAuthConfig = {
  issuer: "https://dev-68317317.okta.com/oauth2/default",
  clientId: "0oa1l5lhd8B3ma1fw5d7",
  redirectUri: window.location.origin + "/login/callback",
};

const oktaSignInConfig = {
  baseUrl: "https://dev-68317317.okta.com",
  clientId: "0oa1l5lhd8B3ma1fw5d7",
  redirectUri: window.location.origin + "/login/callback",
  authParams: {},
};

export { oktaAuthConfig, oktaSignInConfig };
