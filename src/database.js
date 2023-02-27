const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://mongo/demo-01')
    .then( db => console.log('DB CONNECTED') )
    .catch( error  => console.error('DB ERROR => ', error) );