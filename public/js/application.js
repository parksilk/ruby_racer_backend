var gameOver = function (player) {
  $(document).off('keyup');
  // do an AJAX call to save winner to database
  //var winnerName = $('form').find('input[name='+player+'_name]').val();
  var winnerName = Game[player]; // defined in game.erb
  // alert(winnerName + " wins!");
  // location.reload();
  $.ajax({
    url: '/games/' + Game.id,
    type: "put",
    data: {winner: winnerName} // pass time, too
  }).done(function (response) {
    $('#game_stats').append("<h2>"+winnerName+" wins!</h2><br><a href='/'>New Players</a>");
    $('#game_stats').append("<a href='/'>Play Again</a>");
    $('#game_stats').append("<a href='/'>Page for this game</a>");
    $('#game_stats').slideDown();

  });
};

var updatePlayerPosition = function (player_keycode) {
  var playerId = undefined;

  if (player_keycode == 80) {
    playerId = "player1";
  } else if (player_keycode == 81) {
    playerId = "player2";
  } else {
    return;
  }

  var playerStripId = "#" + playerId + "_strip";

  $(playerStripId + ' td.active').toggleClass('active').next().toggleClass('active');

  if ($(playerStripId + ' td:last').hasClass('active')) {
    gameOver(playerId);
  }
};

$(document).ready(function() {
  $(document).on('keyup', function(event) {
    updatePlayerPosition(event.keyCode);
  });
});


  // OLD CODE, replaced by Jeffrey's refactor above.
    // if(event.keyCode == 80) {
    //   $('#player2_strip td.active').toggleClass('active').next().toggleClass('active');
    //   if($('#player2_strip td:last').hasClass('active')) {
    //     alert("Player 2 Wins!");
    //     location.reload();
    //   };
    // };

    // if(event.keyCode == 81) {
    //   $('#player1_strip td.active').toggleClass('active').next().toggleClass('active');
    //   if ($('#player1_strip td:last').hasClass('active')) {
    //     alert("Player 1 Wins!");
    //     location.reload();
    //   };
    // };
