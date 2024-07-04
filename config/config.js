const config = {
  production: {
  },
  default: {
    PERSIST_LOGIN_SECRET: "test123",
    RESET_PASSWORD_KEY: "test123",
    DATABASE:
      "mongodb://localhost:27017/node_auth",
    SENDGRID_API_KEY:
      "resend key",
    CLIENT_URL: "http://127.0.0.1:5000",
    ACTIVATION_SECRET: "test123",
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
