
import  express  from "express";
import gpsRouter from './routes/gpsRouter.js';
import dotenvConfig from './config/config.js';

const PORT=dotenvConfig.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

app.get('/', (req,res) => {
    res.send('<h1>Conversor GPS DD a GRADOS</h1>')
})

app.use('/api',gpsRouter)

server.on('error', error => console.log(error))