(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "d4245ae20fa497b1994b860aa008b45c";

},{}],2:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push('ping-pong');
    } else if (i % 3 === 0) {
      output.push('ping');
    } else if (i % 5 === 0) {
      output.push('pong');
    } else {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.operation = function(number1, number2, operator) {
  var output = 0;
  if (operator === "+") {
    output = number1 + number2;
  } else if(operator === "-") {
    output = number1 - number2;
  } else if(operator === "*") {
    output = number1 * number2;
  } else {
    output = number1 / number2;
  }
  return output;
};

exports.calculatorModule = Calculator;

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Weather(){
}

Weather.prototype.getWeather = function(city) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
  }).fail(function(error){
    $('.showWeather').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;

},{"./../.env":1}],4:[function(require,module,exports){
$(function(){
  $('#operations').submit(function(event){
    event.preventDefault();
    var number1 = parseInt($('#number1').val());
    var number2 = parseInt($('#number2').val());
    var operator = $('#operator').val();
    var simpleCalculator = new Calculator('hot pink');
    var answer = simpleCalculator.operation(number1, number2, operator);
    $('#answer').prepend('<li>Your answer is ' + answer + '!</li>');
  });
});

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator('hot pink');
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to a list!</p>');
  });
});

$(function(){
  $('#time').text(moment());
});

var Weather = require('./../js/weather.js').weatherModule;


$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city);
  });
});

},{"./../js/pingpong.js":2,"./../js/weather.js":3}]},{},[4]);
