const express = require('express');
var cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
const userController = require('./controllers/userController');
const loginController = require('./controllers/loginController');
const signupController = require('./controllers/signupController');
const eventController = require('./controllers/eventController');


app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.urlencoded({ extended: false }));
app.listen(4500, (req, res) => {
  console.log("listening in port 4500...");
});
app.post('/regUserEvent', userController.registerUserInEvent);
app.get('/registeredPlayers/:id', eventController.getNumberOfRegisteredPlayers);
app.post('/cancelReg', userController.cancelRegistration);
app.get('/users', userController.getUsers);
app.get('/events', eventController.getEvents);
app.delete('/eventinfo/:id', eventController.deleteEvent);
app.post('/eventinfo', eventController.addEvent);
app.put('/eventinfo/:id', eventController.updateEvent);
app.get('/eventinfo', eventController.getEventInfo);
app.get('/eventinfo/:id', eventController.getAnEventInfo);
app.put('/users/:id', userController.updateUser);
app.get('/users/:id', userController.getAUser);
app.delete('/users/:id', userController.deleteUser);
app.post('/users', userController.addUser);
app.post('/signup', signupController.signup);
app.get('/playerProfile/:name', userController.playerProfile);
app.post('/login', loginController.login)