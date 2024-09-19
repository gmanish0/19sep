const express = require('express');
const stdControl =require('../controller/stdController')
const router = express.Router();

router.post('/add/user',(req,res)=>{
    console.log("Here......");
    stdControl.addStudent(req,res)
});
router.get('/users',(req,res)=>{
    stdControl.getStudents(req,res);
  })
module.exports= router;