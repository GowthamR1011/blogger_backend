import express from "express";
import router from "./src/routes/blogs.routes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/blogs", router);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
