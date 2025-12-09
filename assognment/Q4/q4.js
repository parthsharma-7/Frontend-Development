// Q4 – Special Offer Banner
$(document).ready(function () {
  var $banners = $(".banner");
  var currentIndex = 0;
  var rotationIntervalId = null;

  // Initially show the first banner so rotation is visible immediately
  $banners.hide().eq(currentIndex).show();

  // 1. “Hide” button → hide specific banners.
  $("#hide-banners").on("click", function () {
    // Hide all banners instantly
    $banners.hide();
  });

  // 2. “Show” button → show hidden banners.
  $("#show-banners").on("click", function () {
    // Show all banners instantly
    $banners.show();
  });

  // 3. “Slide Up/Down” buttons → toggle banners.
  $("#slide-toggle-banners").on("click", function () {
    // Toggle slide for all banners
    $banners.slideToggle(400);
  });

  // 4. “Fade In/Fade Out” → show/hide banners gradually.
  $("#fade-out-banners").on("click", function () {
    $banners.fadeOut(400);
  });

  $("#fade-in-banners").on("click", function () {
    $banners.fadeIn(400);
  });

  // 5. Automatically rotate through banners every 5 seconds using .fadeIn()/.fadeOut().
  function startBannerRotation() {
    // Clear any existing interval to avoid duplicates
    if (rotationIntervalId !== null) {
      clearInterval(rotationIntervalId);
    }

    rotationIntervalId = setInterval(function () {
      // Fade out current banner
      $banners.eq(currentIndex).fadeOut(500, function () {
        // Move to the next banner index (loop back to 0 at the end)
        currentIndex = (currentIndex + 1) % $banners.length;
        // Fade in the next banner
        $banners.eq(currentIndex).fadeIn(500);
      });
    }, 5000); // 5 seconds
  }

  // Start automatic rotation when page loads
  startBannerRotation();
});
