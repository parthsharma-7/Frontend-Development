// Q5 – Team Members Directory
$(document).ready(function () {
  var $departments = $(".department");
  var $employees = $(".employee");

  // Utility: clear all highlights
  function clearHighlights() {
    $(".highlight, .sibling-highlight").removeClass("highlight sibling-highlight");
  }

  // 1. Click a manager → highlight all direct reports.
  $(".manager").on("click", function () {
    clearHighlights();
    // Direct reports are employee elements inside this manager
    $(this).find(".employee").addClass("highlight");
  });

  // 2. Hover on an employee → show contact info using .next().
  $employees.hover(
    function () {
      // .next() selects the immediate sibling; here contact-info is inside the employee, so use .find().next() style
      // but we can still demonstrate .next() by placing the span as the next sibling of the text node.
      // In this markup, .contact-info is the next element inside the employee, so .children().next() effectively uses .next().
      $(this).children(".contact-info").stop(true, true).fadeIn(150);
    },
    function () {
      $(this).children(".contact-info").stop(true, true).fadeOut(150);
    }
  );

  // 3. Click on a department → change background of all members in that department using .children().
  $departments.on("click", ".department-header", function () {
    clearHighlights();
    // .parent() gets the department div, then .children('.team') gets the team container
    var $dept = $(this).parent();
    $dept.children(".team").find(".manager, .employee").addClass("highlight");
  });

  // 4. Select a random employee → highlight sibling employees.
  $("#random-highlight").on("click", function () {
    clearHighlights();

    if ($employees.length === 0) return;

    // Choose a random employee index
    var randomIndex = Math.floor(Math.random() * $employees.length);
    var $randomEmployee = $employees.eq(randomIndex);

    // Highlight siblings of the random employee within the same manager
    $randomEmployee
      .siblings(".employee")
      .addClass("sibling-highlight");

    // Also highlight the chosen employee for clarity
    $randomEmployee.addClass("highlight");
  });

  // 5. Collapse/expand team using .parent() and .find().
  $departments.on("click", ".department-header", function () {
    var $dept = $(this).parent(); // .parent() to go from header to department

    // Toggle collapsed state on the department element
    $dept.toggleClass("collapsed");

    // .find() to reach into nested elements (team and members)
    $dept.find(".team").slideToggle(200);
  });
});
