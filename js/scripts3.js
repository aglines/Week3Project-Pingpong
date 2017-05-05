// BACKEND LOGIC
var pingPong = function(userInput) {
  var outputArray = [];
  var number = Math.floor(Math.abs(Number(userInput)));
  if ( isNaN(number) ) {
    return result = "Invalid entry; please use only numbers.";
  }
  else {
    for (i=1; i<= number; i+=1) {
      if (i%15 === 0) {
        temp = " ping-pong";
      }
      else if (i%3 === 0) {
        temp = " ping";
      }
      else if (i%5===0) {
        temp = " pong";
      }
      else {
        temp = " " + i;
      }
      outputArray.push(temp);
    }; // FOR LOOP
    return outputArray;
  } // ELSE
}; // FUNCTION PINGPONG

// FRONTEND LOGIC
$(document).ready(function() {
  $("#userForm").submit(function() {
    event.preventDefault();
    var input = $("#userInput").val();
    var output = pingPong(input);
    $("#output").text(output);
  });
});
