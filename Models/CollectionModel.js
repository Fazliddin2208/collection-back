const mongoose = require('mongoose')

const collectionSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true
    },
    topic:{
        type: String,
        required: true
    },
    tegs:{
        type: [String],
        required: true
    },
    photo:{
        type:String,
        required: true
    },
    items:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        }
    ],
    // createdBy:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    // userId:{
    //     type: String,
    //     required: true
    // }    
},{
    timestamps: true
})

// const Collection = mongoose.model('Collection', new mongoose.Schema({
//     title:{
//         type: String,
//         required: true,
//     },
//     tegs:{
//         type: [String],
//         required: true
//     },
//     photo:{
//         type:String,
//         required: true
//     },
//     items:[
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'Item'
//         }
//     ],
//     userId:{
//         type: String
//     }
// }))

// const Item = mongoose.model('Item', new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description:{
//         type: String
//     },
//     tegs:{
//         type: [String],
//         required: true
//     },
//     photo:{
//         type: String,
//         required: true
//     },
//     exInf:{
//         type: Object
//     },
//     comments:[
//         {
//             name: String,
//             text: String,
//             date: {type: Date, default: Date.now}
//         }
//     ],
//     userId:{
//         type: String
//     }
// }))

// module.exports = {
//     Collection,
//     Item
// }

module.exports = mongoose.model('Collection',collectionSchema)