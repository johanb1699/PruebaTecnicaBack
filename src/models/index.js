// Conexión a Base de datos
import mongoose from 'mongoose';
require('dotenv').config()

const connectDB = () => {
    const uri = "mongodb+srv://johanb16:5gN5Q4ZV6XtNEfhr@cluster0.k763p0b.mongodb.net/test?retryWrites=true&w=majority";
    mongoose.connect(uri,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log('error db:', e))
}

export{
    connectDB
}