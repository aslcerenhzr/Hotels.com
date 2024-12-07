const mongoose = require("mongoose")

//mongodb conn
var mongoURL = 'mongodb+srv://user:user123@cluster0.m1tf4.mongodb.net/mern-rooms'

const connectDB = () => {
    mongoose.connect(mongoURL, {
        useUnifiedTopology: true, useNewUrlParser: true, ssl: true
    });

    var connection = mongoose.connection
    connection.on('error', (error) => {
        console.log('Mongo DB Connection failed')
    })

    connection.once('open', () => {
        console.log('Mongo DB Connection successful')
    })
}

module.exports = connectDB;