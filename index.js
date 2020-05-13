/**
 *  P2P application entrypoint
 */

/**
 * Module dependencies
 */

const express = require('express');
const debug = require('debug');
const Bundle = require('parcel-bundler');
const compression = require('compression');




/**
 * Config
 */

const port = 9050;
const local = process.env.NODE_ENV !== 'development';
// const local = process.env.NODE_ENV !== 'production';

/**
 * Initialize debug
 */

const log = debug('server');

/**
 * Initialize app
 */

const app = express();

/**
 * Compress responses
 */

app.use(compression());

/**
 * Serve bundle
 */

app.use(new Bundle(`${__dirname}/src/index.html`, {
  sourceMaps: local,
  detailedReport: !local
}).middleware());

/**
 * Serve static files
 */

app.use(express.static(`${__dirname}/dist`));
app.use(express.static(`${__dirname}/public`));


/**
 * Start server
 */

app.listen(port, () => {
  log(`Server is listening on port ${port}`);
});

/**
 * Tunnel for local development
 */

if (local) {
  require('ngrok').connect(port).then((url) => {
    log(`Tunnel is available on ${url}`);
  });
}
