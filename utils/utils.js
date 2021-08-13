export const getWindSpeed = (windInMinutes) =>
  ((windInMinutes * 3600) / 1000).toFixed(2);

export const convertTime = (unixSeconds, timezone) => {
  const time = new Date((unixSeconds + timezone) * 1000)
    .toISOString()
    .match(/(\d{2}:\d{2})/);

  return time;
};

export const degToCompass = (num) => {
  var val = Math.floor(num / 22.5 + 0.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "S/SE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
};

export const unixConvert = (utcSeconds) => {
  var date = new Date(utcSeconds * 1000);

  return date.toLocaleDateString(undefined, {
    weekday: "long",
    month: "numeric",
    day: "numeric",
  });
};

export const getTime = (currentTime, timezone) =>
  `${parseInt(convertTime(currentTime, timezone)[0].split(":")[0])}:${
    convertTime(currentTime, timezone)[0].split(":")[1]
  }`;
