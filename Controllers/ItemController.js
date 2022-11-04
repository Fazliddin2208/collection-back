const Item = require('../Models/ItemModel')
const Collection = require("../Models/CollectionModel");
const UserModel = require("../Models/UserModel")

async function createItem (req,res){
    try {
        console.log(req.body)
        const item = new Item({
            // title: req.body.title,
            // description: req.body.description,
            // tegs:req.body.tegs,
            // photo: req.body.photo,
            // collectionName: req.body.collectionName
            ...req.body

        })

        const collection = await Collection.findByIdAndUpdate(req.body.collectionId, {
            $push: { items: item }
        })

        item.save((err,item) => {
            if(err){
                console.log(err)
                return res.status(400).json({errors: err.message})
            }
            return res.status(201).json({
                message: 'Collection created',
                item
            })
        })
    } catch (error) {
        res.status(400).send(error)
        console.log(error);
    }
}

async function getItem (req,res){
    try {
        const item = await Item
            .find()
            // .populate('collectionName')
            // .select('')
        res.status(200).json({item})
    } catch (error) {
        res.status(400).send(error)
    }
}

async function getCollection(req,res){
    try {
        const collection = await Collection.findById(req.params.id).populate("items")
        res.status(200).json(collection)

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createItem,
    getItem,
    getCollection
}