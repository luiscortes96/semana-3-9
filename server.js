const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./routes');

//instancia de express en mi app
const app = express();
app.use(cors());


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// instalación del body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API ENDPOINTS
/*se debe contar un una ruta por medio de método post para el inicio de sesión de la siguiente manera:
'/api/auth/signin'
*/

app.use('/api', apiRouter);

app.set('PORT', 3000);

app.listen(app.get('PORT'),() => {
    console.log('server up');
});

module.exports = app;