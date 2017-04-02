const pooEmoji = $('#poo');
const pooEmojiBubble = $('#poo .try__emoji-bubble');
const alienEmoji = $('#alien');
const alienEmojiBubble = $('#alien .try__emoji-bubble');
const robotEmoji = $('#robot');
const robotEmojiBubble = $('#robot .try__emoji-bubble');

$(document).ready(function() {
  // This makes it so the blinking cursor is after the 1
  $('#settingsNudge').focus().val('1');

  $(document).keydown(function(e) {
    keyDown(e);
  });

  $(document).keyup(function(e) {
    keyUp(e);
  });
});

function keyDown(e) {
  switch(e.which) {
    case 38: // up
    $('.up').addClass('pressed');
    handleEmoji(e, 'up');
    break;

    case 40: // down
    $('.down').addClass('pressed');
    handleEmoji(e, 'down');
    break;

    case 37: // left
    $('.left').addClass('pressed');
    handleEmoji(e, 'left');
    break;

    case 39: // right
    $('.right').addClass('pressed');
    handleEmoji(e, 'right');
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
  }
}


function keyUp(e) {
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
  }
}


function handleEmoji(e, direction) {
  e.preventDefault();

  var emoji;
  var emojiBubble;
  var quotesObject;
  var amount;

  if (e.altKey && e.shiftKey) {
    emoji = pooEmoji;
    emojiBubble = pooEmojiBubble;
    quotesObject = pooQuotes;
    amount = $('#settingsShove').val();
  } else if (e.shiftKey) {
    emoji = alienEmoji;
    emojiBubble = alienEmojiBubble;
    quotesObject = alienQuotes;
    amount = $('#settingsPush').val();
  } else {
    emoji = robotEmoji;
    emojiBubble = robotEmojiBubble;
    quotesObject = robotQuotes;
    amount = $('#settingsNudge').val();
  }

  if (emoji.isOnScreen()) {
    moveEmoji(emoji, direction, amount);
    animateEmojiBubble(emojiBubble, quotesObject);
    return;
  }
}


function moveEmoji(emoji, direction, amount) {
  if (direction === 'up') {
    emoji.css({top: '-=' + amount + 'px'});
  } else if (direction === 'down') {
    emoji.css({top: '+=' + amount + 'px'});
  } else if (direction === 'left') {
    emoji.css({left: '-=' + amount + 'px'});
  } else if (direction === 'right') {
    emoji.css({left: '+=' + amount + 'px'});
  }
}


function animateEmojiBubble(emojiBubble, quotesObject) {
  emojiBubble.toggleClass('try__emoji-bubble--hidden');
  setTimeout(function(){
    var number = Math.floor(Math.random() * quotesObject.length);
    emojiBubble.html(quotesObject[number]);
    emojiBubble.toggleClass('try__emoji-bubble--hidden');
  }, 200);
}


// Snagged from: http://upshots.org/javascript/jquery-test-if-element-is-in-viewport-visible-on-screen
$.fn.isOnScreen = function(){
	var win = $(window);

	var viewport = {
		top : win.scrollTop(),
		left : win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();

	var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};
