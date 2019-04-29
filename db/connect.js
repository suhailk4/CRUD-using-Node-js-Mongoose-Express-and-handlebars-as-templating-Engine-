const mongoose=require('mongoose');

require('./models.js');

mongoose.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser:true},(err)=>{

   if(!err){
       console.log('connected to MongoDB');
   }
   else{
       console.log('Error in connection to DB'+err);
   }

});