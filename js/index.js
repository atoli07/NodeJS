const express= require('express');
const app= express();

const morgan= require('morgan');

app.set('port', 3500);
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(3500, () => {
    console.log('Server on port '+app.get('port'));
});