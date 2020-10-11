import express,{Application,Request,Response,NextFunction} from  'express';

import {Router} from './route'
import * as dotenv from 'dotenv';



const app:Application=express();

dotenv.config({path:"./src/config/config.env"});
const port= process.env.PORT||7000

console.log(process.env.PORT);

app.use(express.json());
const add=(num1:number,num2:number):number=> num1 + num2;

app.get ("/",(req:Request,res:Response,next:NextFunction)=>{
    
    
    console.log('hello');
    
    console.log(add(1,5))
    res.send("Hi There");

});


app.listen(port,()=>{
    console.log(`Server running on port ${port} with name ${process.env.name}`);
    
})