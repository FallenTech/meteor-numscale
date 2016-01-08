Tinytest.add('Instantiation', function (test) {
  test.isNotUndefined(NumScale.scale, 'Scale available');
  test.isNotUndefined(NumScale.padl, 'Padl available');
  test.isNotUndefined(NumScale.padr, 'Padr available');
});

Tinytest.add('Scale Check', function (test) {
  test.equal(NumScale.scale({value: 1000000000, maxLen: 5, powerOf: 10}), '1G', 'Scaling check 1 passed');
  test.equal(NumScale.scale({value: 654345443, maxLen: 6, powerOf: 10}), '654.3M', 'Scaling check 2 passed');
});