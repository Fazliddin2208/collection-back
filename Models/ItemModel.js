const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc:{
        type: String
    },
    tegs:{
        type: [String],
        required: true
    },
    photo:{
        type: String,
        required: true
    },
    exInf:{
        type: Object
    },
    comments:[
        {
            name: String,
            text: String,
            date: {type: Date, default: Date.now}
        }
    ],
    userId:{
        type: String
    },
    time:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Item',itemSchema)