Template.registerHelper('numScale', function(value, maxLen, powerOf) {
  value = (typeof value === 'object' ? undefined : value);
  maxLen = (typeof maxLen === 'object' ? undefined : maxLen);
  powerOf = (typeof powerOf === 'object' ? undefined : powerOf);
  if (value === undefined || value === null) return null;
  return NumScale.scale({value, maxLen, powerOf});
});