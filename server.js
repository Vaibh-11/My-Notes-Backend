const http = require("http");
const { Server } = require("socket.io");

require("dotenv").config();

const app = require("./app");

const connection = require("./config/databaseConnection");

const setupSocket = require("./socket/socket");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["https://myrealnotes.netlify.app"], // array format
    methods: ["GET", "POST"],
    credentials: true,
  },
});

setupSocket(io, connection);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
