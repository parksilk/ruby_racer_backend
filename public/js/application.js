$(document).ready(function() {
  $(document).on('keyup', function(event) {

    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how

    if(event.keyCode == 80) {
      $('#player2_strip td.active').toggleClass('active').next().toggleClass('active');
      if($('#player2_strip td:last').hasClass('active')) {
        alert("Player 2 Wins!");
        location.reload();
      };
    };

    if(event.keyCode == 81) {
      $('#player1_strip td.active').toggleClass('active').next().toggleClass('active');
      if ($('#player1_strip td:last').hasClass('active')) {
        alert("Player 1 Wins!");
        location.reload();
      };
    };
  });
});
