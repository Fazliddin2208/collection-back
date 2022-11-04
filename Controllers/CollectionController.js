const Collection = require("../Models/CollectionModel");
const Item = require("../Models/ItemModel");
const UserModel = require("../Models/UserModel")
const fs = require('fs');
const path = require('path');


async function getCollections(req,res){
    try {
        const collections=await Collection.find({})
        return res.status(200).send(collections)
    } catch (error) {
        res.status(400).send(error)
    }
}

async function createCollection(req,res){
    try {
        const userId = req.user._id;
        console.log(userId)
        // const user = await UserModel.findById(userId);
        // if(user || user.isAdmin){
                const collection = new Collection({
                    ...req.body
                })
                const user = await UserModel.findByIdAndUpdate(userId, {
                    $push: { collections: collection }
                })
                
                collection.save((err,collection) => {
                    if(err){
                        console.log(err)
                        return res.status(400).json({errors: err.message})
                    }
                    return res.status(200).json({
                        message: 'Collection created',
                        collection
                    })
                })
        // }else{
        //     req.status(409).json({message:"Access denied"})
        // }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
        console.log('shu yerga tushyabdi')
    }
}

async function updateCollection(req,res) {
    try{
        let colId=req.params.id
        
        let result=await Collection.findByIdAndUpdate(colId,req.body)
        result.title = req.body.title;
        result.tegs = req.body.tegs;
        result.photo = req.body.photo;
      
        return res.status(200).send(result);
        console.log(result)
    }catch(err){
        res.status(404).send(err)
        console.log('xato')
    }
}

async function deleteCollection(req,res){
    try {
        // console.log('ishlayabdi')
        const colId = await req.params.id;
        const deletedCol = await Collection.findByIdAndDelete(colId)
        res.status(200).json({colId})
        
    } catch (error) {
        // console.log('bir nima')
        res.status(400).json({error})
    }
}

async function getLargestCollections(req,res){
    try {
        const collections=await Collection
            .find({})
            .sort({items:-1})
            .limit(5)
        return res.status(200).send(collections)
    } catch (error) {
        res.status(400).json({error})
    }
}


module.exports = {
    createCollection,
    getCollections,
    deleteCollection,
    updateCollection,
    getLargestCollections,
}