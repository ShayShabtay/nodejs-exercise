const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partial');
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentDate', () => {
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle:'Home Page',
    welcomeMessage:'welcome to our AI website'
  });
});

app.get('/about', (req,res) => {
  res.render('about.hbs', {
    pageTitle:'About Page'
  });
});


app.listen(port, () => {
console.log(`server is up on port ${port}`);
});
