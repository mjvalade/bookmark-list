var submitButton = document.querySelector('.submit-button');
var inputTitle = document.querySelector('.input-title-field');
var displayTitle = document.querySelector('.display-title-field');
var inputUrl = document.querySelector('.input-url-field');
var displayUrl = document.querySelector('.display-url-field');
var errorMessage = document.querySelector('.error-message');

function saveBookmark() {
  var title = inputTitle.value;
  var url = inputUrl.value;
  $('.list1').append(bookmarkTemplate(title, url));
}

function alertMessage() {
    errorMessage.innerText = "Please fill out both";
}

function inputAreEmpty() {
  return (inputTitle.value === "" || inputUrl.value === "");
}

function disableButton() {
  submitButton.disabled = true;
}

function enableButton() {
  submitButton.disabled = false;
}

$(inputTitle).on('keyup', function () {
  if (inputAreEmpty()) { return disableButton(); }
  return enableButton();
});


$(inputUrl).on('keyup', function () {
  if (inputAreEmpty()) { return disableButton(); }
  return enableButton();
});

$(submitButton).on('click', function () {
  if (inputAreEmpty()) { return alertMessage(); }
  return saveBookmark();
});

$('.list1').on('click', '.read-button', function () {
  $(this).parents('.bookmark').toggleClass("red");
});

$('.list1').on('click', '.remove-button', function () {
  $(this).parents('.bookmark').remove();
});

function bookmarkTemplate(title, url) {
  return "<li class='bookmark'>" +
        "<div class='display-title-field'>" + title +
         "<div><a href='" + "http://" + url + "' class='display-url-field' target='_blank'>" + url + "</a></div>" +
         "<button type='button' class='read-button'>Read</button>" +
         "<button type='button' class='remove-button'>Remove</button>"
         "</li>"
}
