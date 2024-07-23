const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const cors = require("cors");

const PORT = process.env.PORT||5000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));


app.post('/registerAccount',(req,res)=>{

})
app.get('/authCheck',(req,res)=>{
        
       return res.status(200).send({auth:false});
    })

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})