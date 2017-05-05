// BACKEND LOGIC
var pingPong = function(userInput) {
  var outputArray = [];
  //ensure input is a number datatype, and an integer
  var number = Math.floor(Number(userInput));
  if ( isNaN(number) ) {
    return result = "Invalid entry; please use only numbers.";

  }
  else {

  for (i=1; i<= number; i+=1) {
    if (i%15 === 0) {
      temp = "ping-pong";
      outputArray.push(temp);
    }
    else if (i%3 === 0) {
      temp = "ping";
      outputArray.push(temp);
    }
    else if (i%5===0) {
      temp = "pong";
      outputArray.push(temp);
    }
    else {
      outputArray.push(i);
    }
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
