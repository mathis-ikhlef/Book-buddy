const express = require("express");
const { createUser, getUserById,} = require("../controllers/user.controller");
const { getBook, getBookById, getBookByFilter, getBookByFavorite } = require("../controllers/book.controller");
const router = express.Router();

router.get("/user/:id", getUserById, createUser);

//Router book
router.get("/book", getBook);  //==> http://localhost:3000/get/book
router.get("/book/:id", getBookById); // ==> http://localhost:3000/get/book/{id du livre}
router.get("/bookFilter/", getBookByFilter); // ==> http://localhost:3000/get/bookFilter/?categories= {nom de la categorie}
router.get("/bookFavorite/", getBookByFavorite); // ==> http://localhost:3000/get/bookFavorite
module.exports = router;