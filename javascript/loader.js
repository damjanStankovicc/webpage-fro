window.addEventListener('load', function () {
  // When the page is fully loaded, hide the loader
  var loader = document.querySelector('.loader-container');
  loader.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {
  var downArrow = document.querySelector('.down-arrow');

  if (downArrow) {
    downArrow.addEventListener('click', function () {
      var elementHeight = document.querySelector('.tp-bgimg').offsetHeight;
      var scrollHeight = 150;
      scrollTo(document.body, scrollHeight, 600); // You can adjust the scroll duration (600ms) as needed
    });
  }
});

