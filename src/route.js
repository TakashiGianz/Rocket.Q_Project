const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req,res) => res.render("index", {page: 'create-pass'}))

// Gerar número de ID da sala na URL    
route.post('/create-room', RoomController.create)
// Pegar o room.ejs que esta no render do roomController pra conseguir pegar as ID's
route.get('/room/:room', RoomController.open)
// Entra na sala já criada
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route