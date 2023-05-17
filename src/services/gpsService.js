import gpsCoordinates from "../helpers/gpsCoordinates.js";

const gpsService = (dd) => {

    let cantComas = dd.split(",").length;
    let splitter = dd.split(" ");
    let lat = splitter[0];
    let long = splitter[1];

    if (cantComas > 2) { // Si tiene mas de  dos comas significa que los numeros usan el sistema decimal con comas
        lat = lat.replace(/,/g, '.'); 
        long = long.replace(/,/g, '.');
    } 
    lat = parseFloat(lat);
    long = parseFloat(long);
    const result = gpsCoordinates(lat, long);
    return result
}

export default gpsService;