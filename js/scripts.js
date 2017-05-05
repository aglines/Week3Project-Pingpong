var temp = "";

// BACKEND LOGIC
var pingPong = function(userInput) {
  var outputArray = [];
  //ensure input is a number, if not return "invalid"
    // come back to this if need
  var number = parseInt(userInput);

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
