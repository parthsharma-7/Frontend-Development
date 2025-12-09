// Q3 – Interactive FAQ
$(document).ready(function () {
  var $questions = $(".question");

  // 1. Click on a question → toggle answer visibility.
  $questions.on("click", function () {
    // Find the related answer div within the same faq-item and toggle it
    $(this).next(".answer").slideToggle(200);
  });

  // 2. Hover → change question color.
  $questions.hover(
    function () {
      // On mouse enter, add class to change color
      $(this).addClass("hovered");
    },
    function () {
      // On mouse leave, remove the hover class
      $(this).removeClass("hovered");
    }
  );

  // 3. Double-click question → collapse all answers.
  $questions.on("dblclick", function () {
    // Hide all answers at once
    $(".answer").slideUp(200);
  });

  // 4. Focus on answer input (if any) → highlight parent question.
  $(".answer-input").on("focus", function () {
    // Traverse up to the faq-item, then find the question and highlight it
    $(this)
      .closest(".faq-item")
      .find(".question")
      .addClass("highlight-parent");
  });

  // 5. Blur from input → reset background color.
  $(".answer-input").on("blur", function () {
    // Remove highlight class when input loses focus
    $(this)
      .closest(".faq-item")
      .find(".question")
      .removeClass("highlight-parent");
  });
});
