import express from "express"
import cors from "cors"
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use( cors({
    origin:"*",
    methods:["GET","POST","PUT","DELETE"]
}) );       


app.get("/",(req,res)=>{
    res.send("Hello from Express for Jenkins");
});

app.listen(3000,()=>{
    console.log("Server started on port 3000");
});