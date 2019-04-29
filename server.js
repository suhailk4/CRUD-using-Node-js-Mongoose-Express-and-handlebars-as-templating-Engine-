require('./db/connect.js');
const User=require('./db/connect.js');
const express=require('express');
const app=express();


const hbs=require('express-handlebars');

app.engine('handlebars',hbs({defaultLayout:'main'}))
app.set('view engine','handlebars')


app.use(express.urlencoded({extended:false}));
app.use('/employee',require('./routes/employeeControler.js'));

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is up on ${PORT}`);
});

