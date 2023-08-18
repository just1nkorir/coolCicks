import { shoeCollection } from "../../database/schemas/ShoeSchema.js"

// !MIDDLE WARE TO HANDLE THE  FILTERING API
export const filters_middleware=async(req,res,next)=>{

    const header =req.query.category||"teens"
    if(!header){
        next()
    }else{

     const data=  await   shoeCollection.aggregate([
            {
                $lookup:{
                    from:"categories",
                    localField:"categoryId",
                    foreignField:"_id",
                    as:"categoryData",
                },
            },
            {
                $match:{
                    "categoryData.category_Name":header,
                }
            },
            {
                $project:{
                    "categoryData":0,
                }
            }
           
        ])

        res.status(200).json({data})



        // !filter the data  fill the pages of the same categories

        
        
    }


}