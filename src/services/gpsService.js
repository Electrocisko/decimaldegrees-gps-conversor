import gpsCoordinates from "../helpers/gpsCoordinates.js";

const gpsService = (dd) => {
    let splitter = dd.split(",");
    let lat = parseFloat(splitter[0]);
    let long = parseFloat(splitter[1]);
    const result = gpsCoordinates(lat, long);

    return result
}

export default gpsService;