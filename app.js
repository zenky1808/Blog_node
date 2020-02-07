const express = require("express");
const app = express();
const port = 8000;
const bodyParser = require('body-parser');


var homeRouter = require('./router/home.route');


app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', homeRouter);



app.get('/about', function(req, res){
    res.render('about')
});
app.get('/contact', function(req, res){
    res.render('contact')
});
app.get('/post', function(req, res){
    res.render('post')
});





app.listen(port, function(){
    console.log('Server started port '+ port);
});