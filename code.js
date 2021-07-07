var score = 0;
onEvent("playbutton", "click", function( ) {
  timedLoop(1000, function() {
    setPosition("buttonBLUE", randomNumber(100, 300), randomNumber(120, 370), 40, 40 );
  });
  timedLoop(1000, function() {
    setPosition("buttonGREEN", randomNumber(100, 300), randomNumber(120, 370), 40, 40);
  });
  timedLoop(1000, function() {
    setPosition("buttonRED", randomNumber(100, 300), randomNumber(120, 370), 40, 40);
  });
  onEvent("buttonBLUE", "click", function( ) {
    score = score + 1;
    setNumber("labelanswerscore", score);
  });
  onEvent("buttonGREEN", "click", function( ) {
    score = score + 1;
    setNumber("labelanswerscore", score);
  });
  onEvent("buttonRED", "click", function( ) {
    score = score + 1;
    setNumber("labelanswerscore", score);
  });
});
