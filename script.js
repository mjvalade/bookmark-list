var submitButton = document.querySelector('.submit-button');
var inputTitle = document.querySelector('.input-title-field');
var displayTitle = document.querySelector('.display-title-field');
var inputUrl = document.querySelector('.input-url-field');
var displayUrl = document.querySelector('.display-url-field');
// var  = document.querySelector(''); *href*


function saveBookmark() {
  displayTitle.innerText = inputTitle.value;
  displayUrl.innerText = inputUrl.value;
  // .innerHTML = inputUrl.value;
}

submitButton.addEventListener('click', function () {
  saveBookmark();
  // $('.list1').prepend( $('.secondary-content'));
});

$('.read-button').on('click', function () {
  $('.list1').toggleClass("red");
});

$('.remove-button').on('click', function () {
  $('.display-title-field, .display-url-field').empty();
  $('.list1').removeClass("red");
});
