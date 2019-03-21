const server = require('http').createServer();
const { promisify } = require('util');
const fs = require('fs');

server.on('request', async (req, res) => {
    res.write(await promisify(fs.readFile)(`${__dirname}${req.url}`));
    res.end();
});

server.listen(8000, '0.0.0.0');
