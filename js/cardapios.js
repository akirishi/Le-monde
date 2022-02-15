$(document).ready(function () {
  $('#padrao').click(function () {
    if ($('#tematico').hasClass('visible')) {
      $("#tematico").css("display", "none");
      $('#tematico').addClass('hidden');
      $('#tematico').removeClass('visible')
      $('#padrao figcaption').css('display', 'none')
    } else {
      $('#tematico').css('display', 'flex');
      $('#tematico').addClass('visible');
      $('#tematico').removeClass('hidden')
      $('#padrao figcaption').css('display', 'flex')
    };
  });
  $('#tematico').click(function () {
    if ($('#padrao').hasClass('visible')) {
      $("#padrao").css("display", "none");
      $('#padrao').addClass('hidden');
      $('#padrao').removeClass('visible')
      $('#tematico figcaption').css('display', 'none')
    } else {
      $('#padrao').css('display', 'flex');
      $('#padrao').addClass('visible');
      $('#padrao').removeClass('hidden')
      $('#tematico figcaption').css('display', 'flex')
    };
  });
});