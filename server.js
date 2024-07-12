const express = require("express");
const { connect } = require("mongoose");
const connectDB = require("./backend/config/db");
const dotenv = require("dotenv").config();
const routesGet = require("./backend/routes/get.routes");
const routesPost = require("./backend/routes/post.routes");
const routesEdit = require("./backend/routes/put.routes");
const loginRoutes = require("./backend/routes/post.routes");
const port = 3000;
const cors = require("cors"); // Ajout de l'importation cors

//connexion a la DB
connectDB();

const app = express();

//Middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware CORS
app.use(cors()); // Utilisation du middleware CORS

app.use("/get", routesGet);
app.use("/post", routesPost);
app.use("/post", loginRoutes);
app.use("/put", routesEdit);
// app.use("/put",  require("./routes/put.routes"));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port));
