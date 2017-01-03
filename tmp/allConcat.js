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
