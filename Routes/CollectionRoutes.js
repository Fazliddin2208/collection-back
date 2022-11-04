const {createCollection, getCollections, updateCollection, deleteCollection,getLargestCollections} = require('../Controllers/CollectionController')
const {checkUser,checkAdmin,user} = require('../Middlewares/AuthMiddlewares')

const router = require('express').Router();

router.get("/", getCollections);
router.post("/create",user, createCollection);
router.put("/:id", updateCollection);
router.delete("/:id", deleteCollection);
router.get("/largest", getLargestCollections)

module.exports = router;