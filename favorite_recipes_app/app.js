var express = require('express');
var expressLayouts = require('express-ejs-layouts')
var bodyParser = require('body-parser')
var app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(expressLayouts)


app.get('/', function (request, response) {
  response.render('index')
});

app.listen(3000, function () {
 console.log('Example app listening on port 3000!');
});
