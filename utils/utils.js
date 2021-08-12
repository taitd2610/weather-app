export const UTCEpochToLocalDate = (utcSeconds) => {
  var date = new Date(0);
  date.setUTCSeconds(utcSeconds);
  return date.toString();
};
