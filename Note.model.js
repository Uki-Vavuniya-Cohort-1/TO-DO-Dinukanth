// const mongoose = require('mongoose')
// const NotemodelSchema = new mongoose.Schema({
//     id: {
//         type: String,
//         require: true
//     },
//     title: {
//         type: String,
//     },
//     createdby: {
//         type: String,
//     },  
//     createdon:{ 
//       type: String,
//     },
//     content:{
//         type: String,
//     },
//     deadline:{
//         type: String,
//     },
//     status:{
//         type: String,
//     }
// })
// const Model = mongoose.model('To-Do List', NotemodelSchema);
// module.exports = Model;


const Mongoose =require("mongoose");
const schema = new Mongoose.Schema({
  id: {
    type: String,
    require: true,
    unique: true
  },
  title: {
    type: String
  },
  created_by: {
    type: String
  },
  created_on: {
    type: Date
  },
  contant: {
    type: String
  },
  dead_line: {
    type: Date
  },
  status: {
    type: String
  }
});
const Model = Mongoose.model('To-Do List', schema);
module.exports = Model;