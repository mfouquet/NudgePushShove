$(document).ready(function() {
  $('#settingsNudge').focus().val('1');

  $(document).keydown(function(e) {
    switch(e.which) {
      case 38: // up
      $('.up').addClass('pressed');
      break;

      case 40: // down
      $('.down').addClass('pressed');
      break;

      case 37: // left
      $('.left').addClass('pressed');
      break;

      case 39: // right
      $('.right').addClass('pressed');
      break;

      case 78: // right
      $('.n').addClass('pressed');
      break;

      case 16: // right
      $('.shift').addClass('pressed');
      break;

      case 17: // right
      $('.ctrl').addClass('pressed');
      break;

      case 18: // right
      $('.option').addClass('pressed');
      break;

      case 91: // right
      $('.cmd').addClass('pressed');
      break;

      default: return; // exit this handler for other keys
    }
  });

  $(document).keyup(function(e) {
    switch(e.which) {
      case 38: // up
      $('.up').removeClass('pressed');
      break;

      case 40: // down
      $('.down').removeClass('pressed');
      break;

      case 37: // left
      $('.left').removeClass('pressed');
      break;

      case 39: // right
      $('.right').removeClass('pressed');
      break;

      case 78: // right
      $('.n').removeClass('pressed');
      break;

      case 16: // right
      $('.shift').removeClass('pressed');
      break;

      case 17: // right
      $('.ctrl').removeClass('pressed');
      break;

      case 18: // right
      $('.option').removeClass('pressed');
      break;

      case 91: // right
      $('.cmd').removeClass('pressed');
      break;

      default: return; // exit this handler for other keys
    }
  });
});
