import { Router } from "express";
import { ValidateToken } from "../middlewares/AuthenticationMiddlewares.js";
import { Add_Shoe_Function } from "./helpers/AddShoeHelper.js";

export const addShoeRoute= Router()

addShoeRoute.post('/api/coolcicks/v1/add_newShoe',ValidateToken,(req,res)=>{
    // !handle the logics in Admin login folder

    Add_Shoe_Function(req,res)
})