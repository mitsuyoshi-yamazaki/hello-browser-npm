(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var arithmetic = require('arithmetic');
var repeat = ''//require('repeat-string');

var result = arithmetic.add(2, 4);

console.log(result);
document.write(result);
document.write("<br>");

console.log(repeat('A', 100));
document.write(repeat('C', 10));

},{"arithmetic":2}],2:[function(require,module,exports){
'use strict'

var isNumeric = require('is-numeric')

exports.add = function add (num1, num2) {
  areNumbers(num1, num2)

  return (+num1) + (+num2)
}

exports.sum = function sum (numbers) {
  return numbers.reduce(exports.add)
}

exports.subtract = function subtract (num1, num2) {
  areNumbers(num1, num2)

  return (+num1) - (+num2)
}

exports.difference = function difference (numbers) {
  return numbers.reduce(exports.subtract)
}

exports.multiply = function multiply (num1, num2) {
  areNumbers(num1, num2)

  return (+num1) * (+num2)
}

exports.product = function product (numbers) {
  return numbers.reduce(exports.multiply)
}

exports.divide = function divide (num1, num2) {
  areNumbers(num1, num2)

  return (+num1) / (+num2)
}

exports.quotient = function (numbers) {
  return numbers.reduce(exports.divide)
}

function areNumbers (num1, num2) {
  if (!isNumeric(num1) || !isNumeric(num2)) {
    throw new Error('num1 and num2 must be a number')
  }
}

},{"is-numeric":3}],3:[function(require,module,exports){
(function(root) {
  'use strict';

  function isNumeric(v) {
    if (typeof v === 'number') return true;
    var s = (v||'').toString();
    if (!s) return false;
    return !isNaN(s);
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = isNumeric;
    }
    exports.isNumeric = isNumeric;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return isNumeric;
    });
  } else {
    root.isNumeric = isNumeric;
  }

})(this);

},{}]},{},[1]);
