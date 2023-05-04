const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/films', createProxyMiddleware({ target: 'http://localhost:3001' }));
  app.use('/authorization', createProxyMiddleware({ target: 'http://localhost:3002' }));
};