const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const authMiddleware = async(req,res,next) => {
  const token = req.header("Authorization");
  if(!token) {
    res.status(401).send("Vous n'avez pas de token")
  }
const decodded = jwt.verify(token,"hugoSecret")
const user = await User.findOne({_id:decodded._id})
if (!user) {
  res.status(401).send("Utilisateur non trouvé")
}
req.user = decodded._id
next()
}

module.exports = authMiddleware