module.exports = (app) => {
  // Always pretty-print JavaScript -- gzip will handle
  // the JSON objects taking too much data.
  app.set('json spaces', 2);

  // Extends response object to add shortcut for failing
  // a request and sending back a message to the client.
  app.use((req, res, next) => {
    res.fail = (message, statusCode = 500) => {
      if (message instanceof Error) {
        message = message.message;
      }
      res.status(statusCode).json({
        type: 'error',
        message: message
      });
    };
    next();
  });
};
