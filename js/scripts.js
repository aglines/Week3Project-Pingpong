var outputArray = [];

// BACKEND LOGIC
var pingPong = function(userInput) {
  //ensure input is a number, if not return "invalid"
    // come back to this if need
  var number = parseInt(userInput);
  for (i=1; i<= number; i+=1) {
    outputArray.push(i);
  }
  return outputArray;

}; // FUNCTION CLOSE



// FRONTEND LOGIC
$(document).ready(function() {
  $("#userForm").submit(function() {
    event.preventDefault();
    var input = $("#userInput").val();
    var output = pingPong(input);
    $("#output").text(output);
  });
});
