//to run => node index.js
//to run with nodemon => npx nodemon index.js
const Joi = require('joi'); //input validation package
const express = require('express');
const app = express();

app.use(express.json()); // enables parsing of json objects in the body


const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/api/courses", (req, res) => {
    res.send([1, 2, 3]);
});

app.get("/api/courses/all", (req, res) => {
    res.send(courses);
});

app.get("/api/course/:id", (req, res) => {
    res.send(req.params.id);
});
app.get("/api/course/:id1/:id2", (req, res) => {
    res.send(req.params);
    res.send(req.params.id1 + " " + req.params.id2);
    res.statusCode(404).send("Not found");
});


app.post("/api/courses/addCourse", (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    //if(!req.body.name || req.body.name.length < 3){ // input validation
    if(result.error){
        res.status(400).send("Name is required and should be minimum 3 characters");
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

const port = process.env.PORT || 3000; // if there is no environment variable called PORT, use 3000
//set this with "set PORT=5000" in the terminal

app.listen(port, () => console.log('Listening port %d...', port));
