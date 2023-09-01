var button = $('.submit-btn');
var finalText = $('.answer');

button.on("click", calculateAnswer);

function calculateAnswer() {
  event.preventDefault();
  var answer = $('.light-years').val() * 5878625370000;
  finalText.text(answer);
}