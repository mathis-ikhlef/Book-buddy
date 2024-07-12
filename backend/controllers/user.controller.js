const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");
const jwt= require('jsonwebtoken')
const secretKey= "hugoSecret"
// get user by id
module.exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json(user);
};

// create user
module.exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Email déjà utilisé" });
    } else {
      res.status(500).json({ message: "Erreur serveur" });
    }
  }
};

// edit user
module.exports.editPassword = async (req, res) => {
  try {
    const userId = req.user;
    const updates = req.body;

    // Vérifiez si l'utilisateur existe
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Ce profil n'existe pas" });
    }

    // Si vous mettez à jour le mot de passe, assurez-vous de le hacher
    user.password = await bcrypt.hash(updates.password, 10);

    // Mettez à jour l'utilisateur
    const updateUser = await User.findByIdAndUpdate(user, updates, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: "Erreur du serveur", error });
  }
};

//connexion user

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Vérifiez si l'utilisateur existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Utilisateur non trouvé" });
    }

    // Vérifiez si le mot de passe est correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }
    const token = jwt.sign({_id : user._id, email: user.email}, secretKey)
    // Connexion réussie
    res.status(200).json({message: 'Connexion réussie', token})
  } catch (error) {
    res.status(500).json({ message: "Erreur du serveur", error });
  }
};
