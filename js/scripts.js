// BACKEND LOGIC
var backendFunction = function(data) {
  // do stuff
  parseInt(data);
  data = "here is a result";
  return data;
};



// FRONTEND LOGIC
$(document).ready(function() {
  $("#userForm").submit(function() {
    event.preventDefault();
    var data = $("#userInput").val();
    var result = backendFunction(data);
    $("#output").text(result);
  });
});
