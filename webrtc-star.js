#!/usr/bin/env node
'use strict';

/*
 * Run the webrtc-star process but inject our own index.html
 */

const path = require('path');
const { join } = path;
path.join = function (...args) {
  if (args[1] === 'index.html') return join.call(path, __dirname, 'index.html');
  return join.apply(path, args);
};

require('libp2p-webrtc-star-signalling-server/src/bin');
