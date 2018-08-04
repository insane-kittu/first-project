var app = require('express')();
var driverIdAdmin;
var trim = require('trim');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
var port = 9700;


app.get('/index', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {

    res.send('this the server page which im listening to...').end();
});

process.on('uncaughtException', function (err) {
    console.log("caught exception : ");
    console.log(err);
});

process.setMaxListeners(0);

http.listen(port, function (){

    console.log('Process ' + process.pid + ' is listening to all incoming requests', port);

});