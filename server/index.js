import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import router from "./routes/employee.js";
import login from "./routes/login.js"


const app=express();

app.use(cors());
app.use(express.json());


app.use("/employee",router);
app.use("/login",login);

mongoose.connect("mongodb+srv://timestamp:cUx9AVl2XIeDAIHJ@cluster0.iagxc.mongodb.net/timestamp?retryWrites=true&w=majority")
.then(()=>{
    app.listen(5000,()=>{

        console.log("server is running on 5000 port");
    })
})