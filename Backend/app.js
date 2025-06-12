import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import stroriesRoute from './routes/stories.js'
const app = express()

app.use(express.json())
app.use(cors());
app.use(bodyParser.json({limit : "32mb" , extended : true}));
app.use(bodyParser.urlencoded({limit:"32mb" , extended : true}))
//DB connection
const uri_prod = `mongodb://localhost:27017/MERN_Pro_Udemy`
mongoose.connect(uri_prod);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "db connection error: "));
db.once("open", function () { console.log("----MongoDB Connected successfully---"); });

//Routes
app.use('/stories', stroriesRoute);

const serverPort = '8081';
app.listen(serverPort, () => {
  console.log(`Server is running on  ${serverPort}`);
})