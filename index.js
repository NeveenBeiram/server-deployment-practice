const server = require('./server.js');
require('dotenv').config();
const PORT = process.env.PORT || 3030 ;

server.start(PORT);