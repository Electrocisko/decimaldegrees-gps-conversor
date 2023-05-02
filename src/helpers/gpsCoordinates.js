const gpsCoordinates = (lat, long) => {
  let latitud;
  let longitud;

  if (lat > 0) {
    latitud = converterDegrees(lat);
    latitud.hemisphere = "N";
  } else {
    latitud = converterDegrees(lat * -1);
    latitud.hemisphere = "S";
  }

  if (long > 0) {
    longitud = converterDegrees(long);
    longitud.hemisphere = "E";
  } else {
    longitud = converterDegrees(long * -1);
    longitud.hemisphere = "W";
  }

  const result = {latitud, longitud}

  return result;
};

const converterDegrees = (decimalDegrees) => {
  let degrees = Math.trunc(decimalDegrees);
  let decimals = decimalDegrees - degrees;
  let minutesDD = decimals * 60;
  let minutes = Math.trunc(minutesDD);
  let secondsDD = minutesDD - minutes;
  let seconds = Math.round(secondsDD * 60);

  return {
    degrees: degrees,
    minutes: minutes,
    seconds: seconds,
  };
};

export default gpsCoordinates;
