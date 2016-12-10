$(document).ready(function () {
  var intervalTime = 3000;
  var slider = $('.slider');
  var radios = slider.find('[name="toggle"]');
  var startAnimationTimeout = null;
  var animateInterval = null;

  function animateNext() {
    console.log('animateNext');
    var currentRadio = radios.filter(':checked');
    var currentRadioIndex = +currentRadio.val();
    currentRadio.prop('checked', false);
    radios.filter('[value="' + (currentRadioIndex + 1) % 5 + '"]')
      .prop('checked', true);
  }

  function startAnimation() {
    console.log('startAnimation');
    clearInterval(animateInterval);
    animateInterval = setInterval(animateNext, intervalTime);
  }

  radios.on('click', function () {
    console.log('click');
    clearInterval(animateInterval);
    console.log('stopAnimation');
    clearTimeout(startAnimationTimeout);
    startAnimationTimeout = setTimeout(startAnimation, intervalTime);
  });

  startAnimation();
});