import express from 'express';
import bodyparser from 'body-parser';
var cors = require('cors')
import { connectDB } from './models/index'

const app = express();
// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cors())


// Conexión a Base de datos
connectDB()
// import routes
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'Corriendo serivdor Node'
    })
});
require('./routes/dishes')(app);

// iniciar server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: ${PORT}`)
})