const mongoose = require('mongoose');


const inputSchema =  new mongoose.Schema({
    id:{
        type: Number,
    },
    title:{
        type: String,
       required: true
    },
    description:{
        type:String
    },
    completed:{
        type:Boolean
    },
    priority:{
type: Number,
    },
    dueDate:{
        type:Date,
        default:Date.now()
    },
})

module.exports = mongoose.model('todoschema', inputSchema)