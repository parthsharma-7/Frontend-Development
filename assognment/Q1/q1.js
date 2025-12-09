// Q1 – Welcome Page Greeting
// Ensure DOM is ready before running any jQuery code
$(document).ready(function () {
  var $greetingText = $("#greeting-text");
  var $welcomeMessage = $("#welcome-message");

  // 1. On page load → display a personalized greeting based on time of day
  function setTimeBasedGreeting() {
    var now = new Date();
    var hour = now.getHours();
    var greeting;

    if (hour < 12) {
      greeting = "Good Morning!";
    } else if (hour < 18) {
      greeting = "Good Afternoon!";
    } else {
      greeting = "Good Evening!";
    }

    // Update the greeting text dynamically
    $greetingText.text(greeting);
  }

  setTimeBasedGreeting();

  // 2. Button “Change Greeting” → changes text to a motivational quote.
  $("#change-greeting-btn").on("click", function () {
    // Replace greeting text with a motivational quote
    $greetingText.text("Believe in yourself and all that you are!");
  });

  // 3. Toggle visibility of a welcome message using another button.
  $("#toggle-welcome-btn").on("click", function () {
    // Toggle between showing and hiding the welcome message paragraph
    $welcomeMessage.toggle();
  });

  // 4. Show an alert when greeting is clicked.
  $greetingText.on("click", function () {
    // Use the current greeting text inside the alert
    alert("Greeting clicked: " + $greetingText.text());
  });
});
