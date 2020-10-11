import  express,{Request,Response,NextFunction} from 'express';
const Router= express.Router();
Router.get("/",(req:Request,res:Response,next:express.NextFunction)=>{
    res.status(200).json({success:true})
})

export {Router}