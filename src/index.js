import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path, {dirname} from "path";
import userRouters from "./routes/users.js";
import githubRouters from "./routes/github.js";
import fileRouters from './routes/files.js'
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT;
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api", (req, res) => {
  res.send("You are in the empty ocan...💖");
});

app.use("/api", userRouters);
app.use("/api", githubRouters);
app.use('/api', fileRouters);

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

export default app;
