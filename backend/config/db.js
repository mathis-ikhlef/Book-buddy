const mongoose = require("mongoose");
const dotenv = require('dotenv');
const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI, { //Récupère l'URI dans le fichier .env
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        });
        console.log("Mongo connecté");
    } catch (err) {
        console.log(err);
        process.exit(1); // Utilisez 1 pour indiquer une erreur
    }
};

module.exports = connectDB;

