const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();


const {getAllJokes, getJokeById, createJoke} = require("./helpers/jokeHelpers")
const {getAllAuthors} = require("./helpers/authorHelpers")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req,res) => {
  getAllJokes()
    .then((jokes) => {
      const templateVars = {jokes}

      res.render("jokes", templateVars)
    })
    .catch(err => {
      console.log("OH NO.", err)
      res.json(err)
    })
  // See all the jokes, with their author info 
})

app.get("/jokes/new", (req,res) => {
  // New joke form!
  res.render("new-joke")
})

app.get("/jokes/:joke_id", (req,res) => {
  getJokeById(req.params.joke_id)
  .then((joke) => {
    const templateVars = {joke}

    res.render("joke", templateVars)
  })
  .catch(err => {
    console.log("OH NO.", err)
    res.json(err)
  })
  // See one joke, with their author info
})



app.post("/jokes", (req,res) => {
  const {question, answer, rating, author_id} = req.body
  createJoke(question, answer, rating, author_id)
  .then((joke) => {
    console.log(joke)
    res.redirect(`/jokes/${joke.id}`)
  })
  .catch(err => {
    console.log("OH NO.", err)
    res.json(err)
  })
  // Create the joke
})



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
