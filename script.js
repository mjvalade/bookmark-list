var submitButton = document.querySelector('.submit-button');
var inputTitle = document.querySelector('.input-title-field');
var displayTitle = document.querySelector('.display-title-field');
var inputUrl = document.querySelector('.input-url-field');
var displayUrl = document.querySelector('.display-url-field');



function saveBookmark() {
  var title = inputTitle.value;
  var url = inputUrl.value;
  $('.list1').append(bookmarkTemplate(title, url));
}

$(submitButton).on('click', function () {
  saveBookmark();
});

$('.list1').on('click', '.read-button', function () {
  $(this).parent().toggleClass("red");
});

$('.list1').on('click', '.remove-button', function () {
  $(this).parent().remove();
});

function bookmarkTemplate(title, url) {
  return "<li class='bookmark'>" +
        "<div class='display-title-field'>" + title +
         "<div><a href='" + url + "' class='display-url-field' target='_blank'>" +
          + url + "</a></div>" +
         "<button type='button' class='read-button'>Read</button>" +
         "<button type='button' class='remove-button'>Remove</button>"
         "</li>"
}
