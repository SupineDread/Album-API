'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port  = process.env.PORT || 3823;
var db =  process.env.MONGODB || 'mongodb://localhost:27017/albumimages';

//mongoose.connect('mongodb://admin:fieh98100749fuad@ds032340.mlab.com:32340/album-api', (err, res) =>{
mongoose.connect(db, {useMongoClient: true}, (err, res) =>{
    if(err){
        throw err;
    }else{
        console.log('Conexion correcta a la base de datos');
        app.listen(port, function(){
            console.log('Api funcionando en http://localhost:' + port);
        });
    }
});
