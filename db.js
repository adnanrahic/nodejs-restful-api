var mongoose = require('mongoose');
mongoose.connect(process.env.DB, { useMongoClient: true });