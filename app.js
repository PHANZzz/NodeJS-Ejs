const mysql=require('mysql');
const express=require('express');
const app=express();
app.set('view engine','ejs');

const connection=mysql.createConnection({
  host:'localhost',
  password:'',
  user:'root',
  database:'person'
});

app.get('/',(req,res)=>{
  connection.query('select *from persons',(err,result)=>{
    if(err) throw err;
    res.render('index',{data:result});
  });
});
app.listen(3000);