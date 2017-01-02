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
