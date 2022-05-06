const app = require('./app');
const http = require('http');
const dotenv = require('dotenv');
dotenv.config();
let port = process.env.PORT || 3000;
app.set("port", port);

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`money-wiser-backend app is listening on port http://localhost:${port}`);
});