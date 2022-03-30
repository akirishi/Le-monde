$(document).ready(function () {
  $('#padrao').click(function () {
    if ($('#tematico').hasClass('visible')) {
      $("#tematico").css("display", "none");
      $('#info').css('display', 'none')
      $('#tematico').addClass('hidden');
      $('#info').addClass('hidden')
      $('#tematico').removeClass('visible')
      $('#info').removeClass('visible')
      $('figure#padrao').css({'width': '200%'})
    } else {
      $('#tematico').css('display', 'flex');
      $('#info').css('display', 'block')
      $('#tematico').addClass('visible');
      $('#info').addClass('visible')
      $('#tematico').removeClass('hidden')
      $('#info').removeClass('hidden')
      $('figure#padrao').css({'display': 'flex', 'width': '100%'})
    };
  });
  $('#tematico').click(function () {
    if ($('#padrao').hasClass('visible')) {
      $("#padrao").css("display", "none");
      $('#info').css('display', 'none')
      $('#padrao').addClass('hidden');
      $('#info').addClass('hidden')
      $('#padrao').removeClass('visible')
      $('#info').removeClass('visible')
      $('figure#tematico').css('width', '200%')
    } else {
      $('#padrao').css('display', 'flex');
      $('#info').css('display', 'block')
      $('#padrao').addClass('visible');
      $('#info').addClass('visible')
      $('#padrao').removeClass('hidden')
      $('#info').removeClass('hidden')
      $('figure#tematico').css({'display': 'flex', 'width': '100%'})
    };
  });
});