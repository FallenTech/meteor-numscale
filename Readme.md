# NumScale

[![Build Status](https://travis-ci.org/FallenTech/meteor-numscale.png?branch=master)](https://travis-ci.org/FallenTech/meteor-numscale)

A Meteor package for converting numbers into pretty strings with suffixes to indicate scale (Kilo, Million, Billion, etc).
Makes it super easy to display pretty numbers in your Meteor project.

## Direct API Examples
```js
> NumScale.scale({value: 1000000000, maxLen: 5, powerOf: 10});
'1G'

> NumScale.scale({value: 1073741824, maxLen: 5, powerOf: 2});
'1G'

> NumScale.scale({value: 654345443, maxLen: 6});
'654.3M'

> NumScale.scale({value: 43322466, maxLen: 7, powerOf: 2});
'41.316M'
```

## Template Helper
```html
{{numScale <value> <maxLen> <powerOf>}}
{{numScale 1000000000 5 10}}
```

## Usage:

The scale() method takes an object argument.  The members of the argument object
are as follows:

* value (required) - the number to be scaled and formatted
* powerOf (optional) - either 2 or 10: sets scaling factor (defaults to 10)
* maxLen (optional) - maximum length of the string to be returned (default 20)

'value' must be a non-negative positive integer within the safe JavaScript range.