const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Admin=new Schema({
    email:{type:String},
    mdp:{type:String}
}, {
    collection:'admins'
})
module.exports=mongoose.model('Admin',Admin);