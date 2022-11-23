const express=require("express")
const app=express()
const cors=require("cors")
const port=3000;
const employee={id:250,Name:"ganesh",position:"manager   "}
const students=require("./data.js")

app.use(cors())

app.get("/students",(req,res)=>{
	res.json(students)
})
app.get("/",(req,res)=>{
	res.send("starting route")
})

app.get("/demo",(req,res)=>{
	res.send("this is demo route")
})

app.get("/emp",(req,res)=>{
	res.json(employee)
})
app.listen(port,()=>console.log("server is running on port 3000"))