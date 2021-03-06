

////api/users post new user object to db
app.post('/api/users', (req,res)=>{
  res.json({'hello': 'yeah'})
});

////api/users   get all users
// an object containing a user's username and _id.
app.get('/api/users', (req,res)=>{
  res.json({'hello': 'yeah'})
});



////api/users   post new exercise to the user 
//form data description, duration, and optionally date. default date.
//response is user object with exercise
app.post('/api/users/:_id/exercises ', (req,res)=>{
  res.json({'hello': 'yeah'})
});

////api/users   get an exercise log for the user object by id
//The returned response will be the user object with a log array of all the exercises added. 
app.get('/api/users/:_id/logs', (req,res)=>{
  res.json({'hello': 'yeah'})
});
