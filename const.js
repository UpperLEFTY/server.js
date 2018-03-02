const fs = require('fs')
const path = require('path')
const LRU = require('lru-cache')
const express = require('express')
var cookieParser = require('cookie-parser');
const favicon = require('serve-favicon')
const compression = require('compression')
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer')



