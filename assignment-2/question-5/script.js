// Q5 - Boolean Logic Access System
// Security condition variables
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Function to evaluate security status using Boolean logic
function evaluateSecurity() {
  // Access is secure only if all conditions are true
  let isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside;

  if (isSecure) {
    console.log("Secure");
  } else {
    console.log("Unsafe");
  }

  console.log(
    "Status -> DoorLocked:",
    isDoorLocked,
    "| WindowClosed:",
    isWindowClosed,
    "| AlarmOn:",
    isAlarmOn,
    "| OwnerInside:",
    isOwnerInside
  );
}

// Test multiple outcomes
evaluateSecurity(); // Initial state

// Change some values and test again
isOwnerInside = false;
evaluateSecurity();

isAlarmOn = false;
isDoorLocked = false;
isWindowClosed = true;
isOwnerInside = true;
evaluateSecurity();
