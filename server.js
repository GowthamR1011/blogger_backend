import app from "./index.js";

import { NODE_ENV, PORT } from "./src/config/app.config.js";
import http from "http";

const startServer = () => {
  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`Environment: ${NODE_ENV}`);
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};
startServer();
