const express = require("express");
const { getAllAuthors } = require("./controllers");
const router = express.Router();

router.get("/", getAllAuthors);
module.exports = router;
