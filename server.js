import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
 
  import foodRouter from "./routes/foodRoute.js";
//app config

const app = express()
const Port =4000;

//middleware

app.use(express.json())
app.use(cors())

//DB connection
connectDB();
app.get("/", (req, res)=>{
res.send("API Working")
})

//api endpoints
app.use("/api/food" , foodRouter)
app.use("/images" , express.static('uploads'))

app.listen(Port, ()=>{
  console.log(`Server Started on http://localhost:${Port}`);
  
})

//mongodb+srv://harshadakhot30:bSp3tNKe7yGtyEBa@cluster0.wh7vo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0