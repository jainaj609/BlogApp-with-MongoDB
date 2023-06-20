const express = require('express');
const route = require('./routes/route');
const cors = require('cors')
const app = express();
const bodyparser = require('body-parser');
const { connectDB } = require('./database/config');
app.use(bodyparser.json());
app.use(cors({
    origin:"*"
}));
app.use('/app/category', route);


app.get('/', (req,res)=>{
    res.send("<h1>API is running fine</h1>")
})

app.listen(5500, async()=>{
    await connectDB()
    console.log("Server is running on port 5500 !");
})

