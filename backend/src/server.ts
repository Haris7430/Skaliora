
// import "reflect-metadata";
import express from "express" ;
import { AppDataSource } from "config/data-source";
import authRoutes from "@interfaces/routes/authRoutes";
import taskRoutes from "@interfaces/routes/taskRoutes"
import { ENV } from "config/env";


const app= express();
app.use(express.json());



const PORT= ENV.PORT || 3000;

AppDataSource.initialize() 
    .then(()=> {
        console.log("Database Connected Successfully");  
         app.listen(PORT, ()=> console.log(` Server runnning on http://localhost:${PORT}`))

    })

    .catch((err)=>{
        console.error("Database connection error: ", err);
    });

app.use("/scaliora/auth",authRoutes);
app.use("/scaliora/task",taskRoutes)

