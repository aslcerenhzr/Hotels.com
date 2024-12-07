const express = require("express");
const connectDB = require('./db')
const roomsRoute = require('./routes/roomsRoute')

const App = express();

connectDB();

App.use('/api/rooms', roomsRoute)

//starting backend
const port = process.env.port || 5000;
App.listen(port, () => console.log('Node Server Started'));

