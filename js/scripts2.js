//ATTEMPTS AT DRIER CODE
//DESCRIPTION:
//Using arrayBuilder to "subcontract" out
// the work of pushing the current temp var onto array.

//ANALYSIS:  NOT DRIER THAN ORIGINAL

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
      console.log(temp, outputArray);
      arrayBuilder(temp, outputArray);
    }; // FOR LOOP
    return outputArray;
  } // ELSE
}; // FUNCTION PINGPONG


var arrayBuilder = function(temp, outputArray) {
  outputArray.push(temp);

}

// FRONTEND LOGIC
$(document).ready(function() {
  $("#userForm").submit(function() {
    event.preventDefault();
    var input = $("#userInput").val();
    var output = pingPong(input);
    $("#output").text(output);
  });
});
