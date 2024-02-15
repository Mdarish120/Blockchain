
import mongoose, { modelNames } from "mongoose";

const timestamp=new mongoose.Schema({

    name:{
        type:"String"
    }
,
department:{
      type:"String"
    },

    startTime:{
        type:"String"
    },

    endTime:{
        type:"String"
    },
    day:{
        type:"String"
    },

    rating:{
        type:"Number",
    }

    ,desc:{
        type:"String"
    }
});

const TimeStamp=mongoose.model("TimeStamp",timestamp);

export default TimeStamp;