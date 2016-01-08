NumScale = {
  // Input should be an object with members 'value', 'maxLen', 'powerOf'
  scale: function(input) {

    var num = input.value,
        result = '',
        suffixPowerDecimal = ['', 'K', 'M', 'B', 'T'],
        suffixPowerBinary = ['', 'K', 'M', 'G', 'T', 'P'],
        suffix = null,
        index = 0, save = 0, divisor,
        powerOf = input.powerOf || 10,
        maxLen = input.maxLen || 20;
    
    if (powerOf == 10) {
      divisor = 1000;
      suffix = suffixPowerDecimal;
    } else if (powerOf == 2) {
      divisor = 1024;
      suffix = suffixPowerBinary;
    } else throw new Error('invalid powerOf argument');

    if (input.value < Number.MIN_SAFE_INTEGER || input.value > Number.MAX_SAFE_INTEGER) throw new Error('Number not within safe range');

    while (num >= divisor) {
      save = num;
      num = num / divisor;
      index++;
    }

    // Allow for suffix character(s)
    maxLen -= suffix[index].length; 
    result = num.toString();

    for (var p = result.length; result.length > maxLen; p--) {
      if (p < 1) return ('Err');
      result = num.toPrecision(p);
    }

    return (result + suffix[index]);
  },

  // Pad the left side of a string with spaces until it reaches 'len'
  padl: function(str, len) {
    var rval = '', i;

    for (i = 0; i < len - str.length; i++) rval += ' ';
    
    rval += str;
    return (rval);
  },


  // Pad the right side of a string with spaces until it reaches 'len'
  padr: function(str, len) {
    var rval = '', i;
    rval += str;

    for (i = 0; i < len - str.length; i++) rval += ' ';
    return (rval);
  }
};