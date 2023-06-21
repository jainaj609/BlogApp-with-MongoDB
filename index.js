const express = require('express');
const route = require('./routes/route');
const cors = require('cors')
const bodyparser = require('body-parser');
const { connectDB } = require('./database/config');
const dotenv = require('dotenv')

dotenv.config()
const app = express();


app.use(bodyparser.json());
app.use(cors({
    origin:"*"
}));
app.use(route);


app.get('/', (req,res)=>{
    res.send(`<h1>API is ${process.env.STATUS}</h1>`)
})

app.listen(5500, async()=>{
    await connectDB()
    console.log("Server is running on port 5500 !");
})

