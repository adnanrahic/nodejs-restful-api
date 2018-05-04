const User = require('./User');


module.exports.createUser = (req, res) => {
   User.create({
      name : req.body.name,
      email : req.body.email,
      password : req.body.password
   })
   .then(user => {
      // Success Code 201 - Created
      res.status(201).send(user);
   })
   .catch(err => {
      // Success Code 500 - Internal Server Error
      res.status(500).send("There was a problem adding the information to the database.");
   });
}

module.exports.getAllUsers = (req, res) => {
   User.find({})
   .then(users => {
      // Success Code 200 - OK
      res.status(200).send(users);
   })
   .catch(err => {
      res.status(500).send("There was a problem finding the users.");
   })
}

module.exports.getUser = (req, res) => {
   User.findById(req.params.id)
   .then(user => {
      // Success Code 404 - Not Found
      if (!user) return res.status(404).send("No user found.");
      res.status(200).send(user);
   })
   .catch(err => {
      res.status(500).send("There was a problem finding the user.");
   })
}

module.exports.deleteUser = (req, res) => {
   User.findByIdAndRemove(req.params.id)
   .then(user => {
      res.status(200).send(`User: ${user.name} was deleted.`);
   })
   .catch(err => {
      res.status(500).send("There was a problem deleting the user.");
   });
}

module.exports.updateUser = (req, res) => {
   User.findByIdAndUpdate(req.params.id, req.body, {new: true})
   .then(user => {
      res.status(200).send(user);
   })
   .catch(err => {
      res.status(500).send("There was a problem updating the user.");
   });
}


