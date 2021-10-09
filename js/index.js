const express= require('express');
const morgan= require('morgan');
const app = express();

//configuracion
app.set('port', process.env.PORT || 3500);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Rutas
app.use(require('./routes/rutas'));
app.use('/api/alumnos', require('./routes/alumnos'));

//Inicio del servidor
app.listen(app.get('port'), () => {
    console.log('Server on port '+ app.get('port'));
});