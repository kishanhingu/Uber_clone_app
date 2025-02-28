const http = require("http");
const app = require("./app");
const env = require("./config/env.js");
const connectToDB = require("./database/db.js");

const PORT = env.PORT;

const server = http.createServer(app);

try {
  connectToDB();

  server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
} catch (error) {
  console.error(error);
}
