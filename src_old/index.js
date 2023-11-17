import 'dotenv/config'
import  express  from "express";
import userRouters from './routes/users.js'
import githubRouters from './routes/github.js'
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json())
// app.use(express.urlencoded({extended: true}))

app.get("/", (req,res) => {
  res.send("Api is running...")
})
app.use('/api', userRouters)
app.use('/api', githubRouters)

app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});

export default app;