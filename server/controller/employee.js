import TimeStamp from "../model/index.js";


export const addData= async (req,res)=>{

      
 const {name,department,startTime,endTime,day,desc}=req.body

 console.log({name,department,startTime,endTime})

    try {
        
        const result =await TimeStamp.create({name,department,startTime,endTime,day,rating:null,desc});
        res.status(201).json(result);
    } catch (error) {
         
        console.log(error);
        res.status(500).json(error);
    }
    
}



export  const getAll= async(req,res)=>{

      try {
        
         const result =await TimeStamp.find({});
         res.status(200).json(result);
      } catch (error) {

        console.log(error);
        res.status(500).json(error);
        
      }
}


export const AddRating= async (req,res)=>{
    
    const {id}=req.params;
    const {rating}=req.body;

    try {

        const data=await TimeStamp.findOne({_id:id});
        console.log(data.rating);
            const result=await TimeStamp.findByIdAndUpdate({_id:id},{
                name:data.name,
                department:data.department,
                startTime:data.startTime,
                endTime:data.endTime,
                rating:rating
            
            });
            console.log(result);
            res.status(200).json(result);

        
    } catch (error) {

        console.log(error);
        res.status(500).json(error);
        
    }
}


export const updatedData = async(req,res)=>{
      
    const {id}=req.params;
  
    const  {timesheetData}=req.body;
    console.log(timesheetData);


 try {
            
    const result=await TimeStamp.findByIdAndUpdate({_id:id},{name:timesheetData.name,department:timesheetData.department,startTime:timesheetData.startTime
    ,endTime:timesheetData.endTime,day:timesheetData.day,desc:timesheetData.desc
    
    })
    console.log(result);
       
            res.status(200).json(result);

        
    } catch (error) {

        console.log(error);
        res.status(500).json(error);
        
    }

 
    try {
        
    } catch (error) {
         console.log(error)
    }

} 