const mongoose=require('mongoose');
const employeeSchema=new mongoose.Schema({

    fullname:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    mobile:{
        required:true,
        type:Number
    },
    city :{

        type:String,
        required:true
    }
});


const Employee=mongoose.model('Employee',employeeSchema);
module.exports=Employee;