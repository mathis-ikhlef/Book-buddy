const bookModel = require("../models/bookModel");

//Récupère tous les livres
module.exports.addBook = async (req, res) => {
  try {
      // res.send(body)
      const { title, author, etat, pagesMax, readedPages, categories, isFavorite } = req.body;

      // Vérifiez si les champs obligatoires sont présents
      if (!title) {
          return res.status(400).send({ message: "Manque le titre" });
      }
      if (!author) {
          return res.status(400).send({ message: "Manque l'auteur" });
      }
      if (!etat) {
          return res.status(400).send({ message: "Manque l'etat" });
      }
      if (!pagesMax) {
          return res.status(400).send({ message: "Manque les pagesMax" });
      }
      if (readedPages === undefined) {
          return res.status(400).send({ message: "Manque les readedPages" });
      }
      if (!categories) {
          return res.status(400).send({ message: "Manque les categories" });
      }

      // Convertir les valeurs en nombres
      const maxPages = Number(pagesMax);
      const readedPagesNumber = Number(readedPages);

      const book = new bookModel({
          title,
          author,
          state: etat,
          maxPages,
          readedPages:Number(readedPages),
          categories,
          isFavorite:Boolean(isFavorite),
          // userId: req.user._id
      });

      await book.save();
      res.status(200).send(book);
  } catch (e) {
      res.status(400).send("erreur : " + e);
  }
};

module.exports.getBook = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json(books);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.getBookById = async (req, res) => {
  try {
    const books = await bookModel.findById(req.params.id);
    res.status(200).json(books);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.getBookByFilter = async (req, res) => {
  try {
    const filter = req.params;
    const books = await bookModel.find({categories : filter});
    res.status(200).json(books);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.getBookByFavorite = async (req, res) => {
  try {
    const books = await bookModel.find({isFavorite : true});
    res.status(200).json(books);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.putStateBook = async (req, res) => {
  try {
    const updateStateBook = await bookModel.findByIdAndUpdate(req.params.id, {state: req.query.state}, {
      new:true
    }); //Dans ce cas précis, j'ai du utiliser req.query pour modifier l'état du state
    res.status(200).json(updateStateBook);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.updatePages = async (req, res) => {
  try {
    const page = Number(req.query.state);
    const updateStateBook = await bookModel.findByIdAndUpdate(req.params.id, {readedPages: page }, {
      new:true
    });
    res.status(200).json(updateStateBook);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.changeFavoriteToTrue = async (req, res) => {
  try {
    const books = await bookModel.findByIdAndUpdate(req.params.id, {isFavorite: true }, {
      new:true
    });
    res.status(200).json(books);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports.changeFavoriteToFalse = async (req, res) => {
  try {
    const books = await bookModel.findByIdAndUpdate(req.params.id, {isFavorite: false }, {
      new:true
    });
    res.status(200).json(books);
  } catch (e) {
    res.status(400).send(e);
  }
};

