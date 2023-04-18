const mongoose = require('mongoose');

const connectMongo = async() => {
   await mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   })
}

module.exports = connectMongo;