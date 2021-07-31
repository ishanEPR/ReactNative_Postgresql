const express=require('express');
const app=express();

const cors=require('cors');
const bodyParser=require('body-parser');
const pool=require('./database');

app.use(bodyParser.json());
app.use(cors());

//select todoList
app.get("/getTodos",async(req,res)=>{
   
    try {
        
        const getTodo=await pool.query("SELECT * FROM todo");
        res.json(getTodo.rows);
        console.log(getTodo.rows);
        console.log(getTodo.rowCount);
    } catch (error) {
        console.log(error);
    }
})

//insert todo

app.post("/todo",async(req,res)=>{

    const {description}=req.body;
    try {
        const cratedTodo=await pool.query("INSERT INTO todo(description) VALUES($1) RETURNING *",[description]);
        res.json(cratedTodo.rows[0]);
        console.log(cratedTodo);


    } catch (error) {
        console.log(error);
        
    }




})

//display a todo
app.get("/atodo/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        
        const aTodo=await pool.query("SELECT * FROM todo WHERE todo_id=$1",[id]);
        res.json(aTodo.rows[0]);
    } catch (error) {
        
        console.log(error);
    }
})

//update todo
app.put("/update/:id",async(req,res)=>{

    const {id}=req.params;
    const {description}=req.body;

    try {
        
        const updateTodo=await pool.query("UPDATE todo SET description=$1 WHERE todo_id=$2",[description,id]);
     //   res.json(updateTodo.rows);
        console.log(updateTodo.rows);
    } catch (error) {
        console.log(error);
    }


})

//delete todo
app.delete("/deleteTodo/:id",async(req,res)=>{

    const {id}=req.params;
    try {
        
        await pool.query("DELETE FROM todo WHERE todo_id=$1",[id]);
    } catch (error) {
        console.log(error);
    }

})



app.listen(4000,()=>{
    console.log("Server Running on port 4000");
});

