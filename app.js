const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path=require('path')


// const blogRoutes = require('./routes/blogRoutes')
const taskRoute=require('./routes/taskRoute')



app.use(cors());
app.options("*",cors());

//app.use(express.json({ limit: '50mb' }));
//app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// register view engine
app.set('view engine', 'ejs');

// we can use morgan for logging | middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.get('/view', function(req,res){
    res.sendFile(path.join(__dirname,'./public/view.html'));
  });
  app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'./public/form.html'));
  });

app.use('/api/v1/task',taskRoute);





module.exports = app;