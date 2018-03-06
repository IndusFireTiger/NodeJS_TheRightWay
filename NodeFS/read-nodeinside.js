#!/usr/bin/env node --harmony // not the right dir in which node is installed correct it later
require('fs').createReadStream(process.argv[3]).pipe(process.stdout);