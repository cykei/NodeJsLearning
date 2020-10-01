var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var session = require('express-session')
var fs = require("fs")

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

var server = app.listen(3000, function() {
    console.log("Express server has started on port 3000")
})

// static 파일 (css 파일)을 사용할 수 있게 해주는 한 줄
app.use(express.static('public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
    }));
app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
}));


var router = require('./router/main')(app, fs);