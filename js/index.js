const express= require('express');
const app= express();

const morgan= require('morgan');

app.set('port', process.env.PORT || 3500);
app.set('json spaces', 2);
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(require('./routes/rutas'));
app.use('/api/alumnos', require('./routes/alumnos'));

app.listen(app.get('port'), () => {
    console.log('Server on port '+ app.get('port'));
});