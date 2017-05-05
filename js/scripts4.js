// BACKEND LOGIC
var pingPong = function(userInput) {
  var outputArray = [];
  var number = Math.floor(Math.abs(Number(userInput)));
  if ( isNaN(number) ) {
    return result = "Invalid entry; please use only numbers.";
  }
  else {
    for (i=1; i<= number; i+=1) {
      var word = "ping";
      if (i%15 === 0) {
        word = word + "-" + (word.replace("i", "o"));
      }
      else if (i%5===0) {
        word = word.replace("i", "o")
      }
      else if (i%3===0){
        // word needs no change, but this branch cannot come last
      }
      else {
        word = i;
      }
      outputArray.push(word);
    }; // FOR LOOP
    return outputArray;
  } // ELSE FOR VALID INPUT
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
