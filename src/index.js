import  express  from "express";
import userRouters from './routes/users.js'
const app = express();
const port = 3000;

app.use(express.json())

app.get("/", (req,res) => {
  res.send("Api is running...")
})

app.use('/api', userRouters)



app.listen(port, () => {
  console.log(`App is listening on http://localhost:${port}`);
});
