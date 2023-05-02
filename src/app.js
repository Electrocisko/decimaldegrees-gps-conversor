import gpsCoordinates from "../src/gpsCoordinates.js";
import  express  from "express";

const PORT=8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const server = app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

app.get('/', (req,res) => {
    res.send('<h1>Servidor levantado</h1>')
})

app.get('/api/conversor/:dd', (req,res) => {
    const decimalCoordinades = req.params.dd;
  
    let splitter = decimalCoordinades.split(',')
    let lat = parseFloat(splitter[0])
    let long = parseFloat(splitter[1])
    const result = gpsCoordinates(lat,long);

    res.status(200).json(result)
})

server.on('error', error => console.log(error))