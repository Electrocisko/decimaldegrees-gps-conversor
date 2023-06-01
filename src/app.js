
import  express  from "express";
import gpsRouter from './routes/gpsRouter.js';
import dotenvConfig from './config/config.js';
import cors from 'cors';

import pkg from 'pluscodes';
const {encode} = pkg;

console.log(encode({ latitude: 59.332438, longitude: 18.118813 }))

const PORT=dotenvConfig.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors()); //Autoriza a todos

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

app.get('/', (req,res) => {
    res.send('<h1>Conversor GPS DD a GRADOS</h1>')
})

app.use('/api',gpsRouter)

server.on('error', error => console.log(error))