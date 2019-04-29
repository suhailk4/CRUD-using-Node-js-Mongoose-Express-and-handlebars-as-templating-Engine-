const express=require('express');
const router=express.Router();
const Employee=require('./../db/models.js');

router.get('/',(req,res)=>{
    res.render("addOrEdit" ,{

        viewTitle:"Insert Employee"
  
    });

});


router.post('/',(req,res)=>{
            if(req.body._id===''){
                insertRecord(req,res);   
            }
            else{
                updateRecord(req,res);
            }

});


function insertRecord(req,res){

           
             console.log(req.body);


             const {fullname,email,mobile,city}=req.body;

             const employee=new Employee({         
              fullname,
              email,
              mobile,
              city               
             });




             employee.save().then((doc)=>{

                res.redirect('Employee/list');
             }).catch((err)=>{
                 console.log('Error in Insertion' + err);
             });
            
}


function updateRecord (req,res){

           Employee.findOneAndUpdate({_id: req.body._id},req.body,{new:true},(err,doc)=>{


                    if(!err){
                        res.redirect('employee/list')
                    }
                    else{
                        console.log('Error updating  '+ err);
                    }



           });

}



router.get('/list',(req,res)=>{


   

    Employee.find().then((docs)=>{

        console.log(docs);
        res.render('list',{
            list:docs
        });


    }).catch((err)=>{
        console.log('Error in getting the List '+err);
    })

});



router.get('/:id',(req,res)=>{

     Employee.findById(req.params.id,(err,doc)=>{

            if(!err){

                res.render('addorEdit',{
                    viewTitle:'Update Employee',
                    employee:doc
                });
            }

     });

});





router.get('/delete/:id',(req,res)=>{
          Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
            if(!err){
                res.redirect('employee/list');
                }
                else{
                    console.log('Error deleting'+ err);
                }
    })
});


module.exports=router;