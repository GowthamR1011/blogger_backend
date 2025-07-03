import app from "./index.js";

import { NODE_ENV, PORT } from "./src/config/app.config.js";
import http from "http";
import connectDB from "./src/database/mongodb.js";

const startServer = () => {
  const server = http.createServer(app);
  connectDB();
  server.listen(PORT, () => {
    console.log(`Environment: ${NODE_ENV}`);
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};
startServer();
