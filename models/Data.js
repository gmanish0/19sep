const mongoose = require('mongoose');
const Sch = mongoose.Schema;

const stdSch = new Sch({
    id:{
        type:Number
    },
    name:{
        type:String
    },
    marks:{
        type:Number
    }
});
module.exports=mongoose.model('stduent',stdSch);