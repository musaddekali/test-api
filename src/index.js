import dotenv from "dotenv";
dotenv.config();
import express from "express";
import userRouters from "./routes/users.js";
import githubRouters from "./routes/github.js";
const app = express();
app.use(express.json());

const port = process.env.PORT;

app.use("/api", userRouters);
app.use("/api", githubRouters);

app.get("/api", (req, res) => {
  res.send("You are in the empty ocan...💖");
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

export default app;
