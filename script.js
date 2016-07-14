var submitButton = document.querySelector('.submit-button');
var removeButton = document.querySelector('.remove-button')
var inputTitle = document.querySelector('.input-title-field');
var displayTitle = document.querySelector('.display-title-field');
var inputUrl = document.querySelector('.input-url-field');
var displayUrl = document.querySelector('.display-url-field');
var errorMessage = document.querySelector('.error-message');
var displayCount = document.querySelector('.display-count');
var count = 0;
var readCount = document.querySelector('.read-count');
var countRed = 0;
var unreadCount = document.querySelector('.unread-count');
var countUnred = 0;


function saveBookmark(count) {
  var title = inputTitle.value;
  var url = inputUrl.value;
  $('.list1').append(bookmarkTemplate(title, url));
  getTotalCount();
}

function alertMessage() {
    errorMessage.innerText = "Please fill out both fields.";
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

function getTotalCount() {
  count = $('li').length + ": total bookmarks";
  displayCount.innerText = count;
}

function getTotalReadCount() {
  countRed = $('.bookmark').filter('.red').length + ": total read";
  readCount.innerText = countRed;
}

function getTotalUnreadCount() {
  var totalBookmarks = $('.bookmark').length;
  var totalRed = $('.red').length;
  var countUnred = totalBookmarks - totalRed;
  unreadCount.innerText = countUnred + ": total unread";
}

function clearRedBookmarks() {
  clearHighlighted = $('.bookmark').filter('.red').remove();
  getTotalCount();
  getTotalReadCount();
  getTotalUnreadCount();
}

$(inputTitle).on('keyup', function () {
  if (inputAreEmpty()) { return disableButton(); }
  return enableButton();
});

$(inputUrl).on('keyup', function () {
  if (inputAreEmpty()) { return disableButton(); }
  return enableButton();
});

function isUrl() {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  return regexp.test(s);
}

$(submitButton).on('click', function () {
  if (inputAreEmpty()) { return alertMessage(); }
  if (!isUrl())$('.input-url-field').value {
    return errorMessage.innerText = "💀💀Please enter a valid web address."; }
  return saveBookmark();
});



$('.list1').on('click', '.read-button', function () {
  $(this).parents('.bookmark').toggleClass("red");
  getTotalReadCount();
  getTotalUnreadCount();
});

$('.list1').on('click', '.remove-button', function () {
  $(this).parents('.bookmark').remove();
  getTotalCount();
  getTotalReadCount();
  getTotalUnreadCount();
});

$('.secondary-content').on('click', '.clear-read-button', function() {
  clearRedBookmarks();
});

function bookmarkTemplate(title, url) {
  return "<li class='bookmark'>" +
        "<div class='display-title-field'>" + title +
         "<div><a href='" + "http://" + url + "' class='display-url-field' target='_blank'>" + url + "</a></div>" +
         "<button type='button' class='read-button'>Read</button>" +
         "<button type='button' class='remove-button'>Remove</button>"
         "</li>"
}
