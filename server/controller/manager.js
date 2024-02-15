

export const login= async (req,res)=>{
      
const password=req.body.password;


 console.log(password)

    try {
            
        if(password=="check"){
            return res.status(200).json(true);
        }else{
            return  res.status(400).json(false);
        }
    } catch (error) {
          console.log(error);
    }

    
}