const appName = "Server API"; 
const PORT = process.env.PORT || 8080;
const createServer = require("./server");
const server = createServer();
server.listen(PORT, () => console.log(`${appName} running on port ${PORT}!`));
