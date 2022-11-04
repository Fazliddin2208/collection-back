const { createItem, getItem, getCollection } = require('../Controllers/ItemController')

const router = require('express').Router();

router.get("/", getItem);
router.post("/create", createItem);
router.get("/:id", getCollection);

module.exports = router;