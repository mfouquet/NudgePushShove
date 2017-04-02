$(document).ready(function() {
  $('#settingsNudge').focus().val('1');

  $(document).keydown(function(e) {
    var nudge = $('#settingsNudge').val();
    var push = $('#settingsPush').val();
    var shove = $('#settingsShove').val();

    if (e.which === 38 && e.altKey && e.shiftKey) {
      $('#poo').css({top: '-=' + shove + 'px'});
      $('#poo .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');
      setTimeout(function(){
        var number = Math.floor(Math.random() * pooQuotes.length);
        $('#poo .try__emoji-bubble').html(pooQuotes[number]);
        $('#poo .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');
      }, 200);
      e.preventDefault();
      return;
    }

    if (e.which === 40 && e.altKey && e.shiftKey) {
      $('#poo').css({top: '+=' + shove + 'px'});
      $('#poo .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');

      setTimeout(function(){
        var number = Math.floor(Math.random() * pooQuotes.length);
        $('#poo .try__emoji-bubble').html(pooQuotes[number]);
        $('#poo .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');
      }, 200);
      e.preventDefault();
      return;
    }

    if (e.which === 37 && e.altKey && e.shiftKey) {
      $('#poo').css({left: '-=' + shove + 'px'});
      $('#poo .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');

      setTimeout(function(){
        var number = Math.floor(Math.random() * pooQuotes.length);
        $('#poo .try__emoji-bubble').html(pooQuotes[number]);
        $('#poo .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');
      }, 200);
      e.preventDefault();
      return;
    }

    if (e.which === 39 && e.altKey && e.shiftKey) {
      $('#poo').css({left: '+=' + shove + 'px'});
      $('#poo .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');

      setTimeout(function(){
        var number = Math.floor(Math.random() * pooQuotes.length);
        $('#poo .try__emoji-bubble').html(pooQuotes[number]);
        $('#poo .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');
      }, 200);
      e.preventDefault();
      return;
    }


    if (e.which === 38 && e.shiftKey) {
      $('#alien').css({top: '-=' + push + 'px'});
      $('#alien .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');

      setTimeout(function(){
        var number = Math.floor(Math.random() * alienQuotes.length);
        $('#alien .try__emoji-bubble').html(alienQuotes[number]);
        $('#alien .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');
      }, 200);
      e.preventDefault();
      return;
    }

    if (e.which === 40 && e.shiftKey) {
      $('#alien').css({top: '+=' + push + 'px'});
      $('#alien .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');

      setTimeout(function(){
        var number = Math.floor(Math.random() * alienQuotes.length);
        $('#alien .try__emoji-bubble').html(alienQuotes[number]);
        $('#alien .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');
      }, 200);
      e.preventDefault();
      return;
    }

    if (e.which === 37 && e.shiftKey) {
      $('#alien').css({left: '-=' + push + 'px'});
      $('#alien .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');

      setTimeout(function(){
        var number = Math.floor(Math.random() * alienQuotes.length);
        $('#alien .try__emoji-bubble').html(alienQuotes[number]);
        $('#alien .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');
      }, 200);
      e.preventDefault();
      return;
    }

    if (e.which === 39 && e.shiftKey) {
      $('#alien').css({left: '+=' + push + 'px'});
      $('#alien .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');

      setTimeout(function(){
        var number = Math.floor(Math.random() * alienQuotes.length);
        $('#alien .try__emoji-bubble').html(alienQuotes[number]);
        $('#alien .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');
      }, 200);
      e.preventDefault();
      return;
    }

    switch(e.which) {
      case 38: // up
      $('.up').addClass('pressed');
      $('#robot').css({top: '-=' + nudge + 'px'});
      $('#robot .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');

      setTimeout(function(){
        var number = Math.floor(Math.random() * robotQuotes.length);
        $('#robot .try__emoji-bubble').html(robotQuotes[number]);
        $('#robot .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');
      }, 200);
      break;

      case 40: // down
      $('.down').addClass('pressed');
      $('#robot').css({top: '+=' + nudge + 'px'});
      $('#robot .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');

      setTimeout(function(){
        var number = Math.floor(Math.random() * robotQuotes.length);
        $('#robot .try__emoji-bubble').html(robotQuotes[number]);
        $('#robot .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');
      }, 200);
      break;

      case 37: // left
      $('.left').addClass('pressed');
      $('#robot').css({left: '-=' + nudge + 'px'});
      $('#robot .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');

      setTimeout(function(){
        var number = Math.floor(Math.random() * robotQuotes.length);
        $('#robot .try__emoji-bubble').html(robotQuotes[number]);
        $('#robot .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');
      }, 200);
      break;

      case 39: // right
      $('.right').addClass('pressed');
      $('#robot').css({left: '+=' + nudge + 'px'});
      $('#robot .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');

      setTimeout(function(){
        var number = Math.floor(Math.random() * robotQuotes.length);
        $('#robot .try__emoji-bubble').html(robotQuotes[number]);
        $('#robot .try__emoji-bubble').toggleClass('try__emoji-bubble--hidden');
      }, 200);
      break;

      case 78: // n
      $('.n').addClass('pressed');
      break;

      case 16: // shift
      $('.shift').addClass('pressed');
      break;

      case 17: // ctrl
      $('.ctrl').addClass('pressed');
      break;

      case 18: // option
      $('.option').addClass('pressed');
      break;

      case 91: // cmd
      $('.cmd').addClass('pressed');
      break;

      default: return; // exit this handler for other keys
    }

    e.preventDefault();
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

      case 78: // n
      $('.n').removeClass('pressed');
      break;

      case 16: // shift
      $('.shift').removeClass('pressed');
      break;

      case 17: // ctrl
      $('.ctrl').removeClass('pressed');
      break;

      case 18: // option
      $('.option').removeClass('pressed');
      break;

      case 91: // cmd
      $('.cmd').removeClass('pressed');
      break;

      default: return; // exit this handler for other keys
    }
  });
});
