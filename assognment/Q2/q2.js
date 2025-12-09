// Q2 – Product Highlight
$(document).ready(function () {
  // Cache product elements for reuse
  var $products = $(".product");

  // 1. Click on a product → highlight background.
  $products.on("click", function (event) {
    // Avoid conflicts when clicking on the favorite icon inside the product
    if ($(event.target).hasClass("favorite")) {
      return; // let the favorite handler manage that click
    }

    // Remove highlight from all products and add to the clicked one
    $products.removeClass("highlight");
    $(this).addClass("highlight");

    // 5. Show an alert if a product is out of stock (using data attribute).
    var isOutOfStock = $(this).data("out-of-stock");
    if (isOutOfStock) {
      alert("This product is currently out of stock.");
    }
  });

  // 2. Hover over a product → show additional product details.
  $products.hover(
    function () {
      // On mouse enter, show the hidden details paragraph
      $(this).find(".product-details").stop(true, true).slideDown(200);
    },
    function () {
      // On mouse leave, hide the details paragraph
      $(this).find(".product-details").stop(true, true).slideUp(200);
    }
  );

  // 3. Clicking a “Favorite” icon → toggles a “selected” class.
  $(".favorite").on("click", function (event) {
    // Prevent triggering the product click handler
    event.stopPropagation();

    // Toggle the selected class to visually mark favorite products
    $(this).toggleClass("selected");
  });

  // 4. Styles for discounted products are applied in CSS
  // using the attribute selector .product[data-discount="true"]
  // No extra JS code needed here beyond having the correct data attribute in HTML.
});
