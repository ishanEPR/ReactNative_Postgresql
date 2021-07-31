const express=require('express');
const app=express();

const cors=require('cors');
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(cors());


app.listen(4000,()=>{
    console.log("Server Running on port 4000");
});

