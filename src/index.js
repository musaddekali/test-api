import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path, { dirname } from "path";
import userRouters from "./routes/users.js";
import githubRouters from "./routes/github.js";
// import fileRouters from "./routes/files.js";
import homeRouters from "./routes/home.js";
import apiHomeRouters from "./routes/apiHome.js";
import { fileURLToPath } from "url";

const app = express();
app.use(express.json());
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT;
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", homeRouters);
app.use("/api", apiHomeRouters);
app.use("/api", userRouters);
app.use("/api", githubRouters);
// app.use("/api", fileRouters);

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});

export default app;
