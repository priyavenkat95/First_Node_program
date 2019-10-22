const express = require('express');
const app = express();
app.use(express.json());
const courses = [
  { id: 1, name: 'course 1' },
  { id: 2, name: 'course 2' },
  { id: 3, name: 'course 3' }
]
app.get('/', (req, res) => {
  res.send('Hello Buddy!!!');
});
// app.get('/api/courses', (req, res) => {
//   res.send([1,2,3,4,5]);
// });
// app.get('/api/courses/:id', (req, res) => {
//   res.send(req.params.id);
// });
app.get('/api/courses', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  // courses.forEach(function (data) {
  //   const name = data.name;
  //   console.log(name);
  // })
  // console.log(courses.name);
  // console.log(req.body.name);
  const course = [{
    id: courses.length + 1,
    name: req.body.name
  }]
  // console.log(course);
  courses.push(course);
  res.send(course);
  // if(!req.body.name || req.body.name.length < 3){
  //   // 400 Bad Request
  //   res.status(400).send("Name is required and should be minimum 3 character");
  //   return
  // }
});
// app.get('/api/courses/:id', (req, res) => {
//   const course = courses.find(c => c.id === parseInt(req.params.id));
//   if (!course) res.status(404).send('Request Id not Matcing!!');
//   res.send(course); 
// });
// app.get('/api/posts/:year/:month', (req, res) => {
//   res.send(req.params);
// });
// const PORT = 5000;

app.listen(3000, () => {
  console.log(`server running on port 3000`);
});