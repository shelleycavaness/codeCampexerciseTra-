const express = require('express'),
 cors = require('cors'),
 bodyParser = require('body-parser'),
 mongoose = require('mongoose');

require('./models/User')
const dotenv = require('dotenv').config();
const {MongoClient} = require('mongodb');
const User = mongoose.model('User');

//async problem here and dotenv
const uri = process.env.DATABASE
console.log(`uri`, uri)

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true //added to get rid of DeprecationWarning
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });




// Create global app object
const app = express()
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});


app.get('/api', (req,res)=>{
  res.json({'hello': 'yeah'})
});
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

////api/users post new user object to db
//http://localhost:3000/api/users
app.post('/api/users', (req,res, next)=>{
  console.log(` ********* calling create user route`, req.body)
  let user = new User();
  user.username = req.body.user.username;
  user.save().then(() => {
  return res.json(user);
  }).catch(next);
});

///http://localhost:3000/api/users   get all users
// an object containing a user's username and _id.
app.get('/api/users', (req,res)=>{
  res.json({'hello': 'yeah'})
});



////api/users   post new exercise to the user 
//form data description, duration, and optionally date. default date.
//response is user object with exercise
// http://localhost:3000/api/
app.post('/api/users/:_id/exercises ', (req,res)=>{
  res.json({'hello': 'yeah'})
});

////api/users   get an exercise log for the user object by id
//The returned response will be the user object with a log array of all the exercises added. 
app.get('/api/users/:_id/logs', (req,res)=>{
  res.json({'hello': 'yeah'})
});


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
