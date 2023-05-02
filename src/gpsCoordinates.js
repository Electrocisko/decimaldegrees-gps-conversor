const gpsCoordinates = (lat, long) => {
  let latitud;
  let longitud;

  if (lat > 0) {
    latitud = converterDegrees(lat);
    latitud.point = "N";
  } else {
    latitud = converterDegrees(lat * -1);
    latitud.point = "S";
  }

  if (long > 0) {
    longitud = converterDegrees(long);
    longitud.point = "E";
  } else {
    longitud = converterDegrees(long * -1);
    longitud.point = "W";
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
