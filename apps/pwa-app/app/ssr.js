const path = require('path');
const { getRuntime } = require('@salesforce/pwa-kit-runtime/ssr/server/express');
const { getConfig } = require('@salesforce/pwa-kit-runtime/utils/ssr-config');

const options = {
  // The build directory (an absolute path)
  buildDir: path.resolve(process.cwd(), 'build'),

  // The cache time for SSR'd pages (defaults to 600 seconds)
  defaultCacheTimeSeconds: 600,

  // The port that the local dev server listens on
  port: 3003,

  // The protocol on which the development Express app listens.
  // Note that http://localhost is treated as a secure context for development.
  protocol: 'http',
  // manifestPath: 'static/manifest.json',
  mobify: getConfig(),
};

const runtime = getRuntime();

const { handler } = runtime.createHandler(options, (app) => {
  app.get('/hello', (req, res, next) => {
    res.send("Hello World!");
  });
  app.get('*', runtime.render);
});

// SSR requires that we export a single handler function called 'get', that
// supports AWS use of the server that we created above.
exports.get = handler;
