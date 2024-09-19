const Student = require('../models/Data');
async function addStudent(req,res){
    try{
    console.log("Receiving data from client...", req.body);
    let student = new Student(req.body);
    await student.save();
    console.log("Data is added successfully...");
    res.end('Added Stdudent');
    }catch(err){
        console.log(err);
    }
}
async function getStudents(req,res) {
    try{
      let students= await Student.find({});
      console.log(students,'students')
      res.send(students)
    }catch(err){
  
    }
    
  }
module.exports={
    addStudent,
    getStudents
};