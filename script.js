// Module 4 Assignment — Steps 1 and 10–12
// The greeting is printed to the browser's developer console.
(function () {
  "use strict";

  var names = [
    "Yaakov", "John", "Jen", "Jason", "Paul",
    "Frank", "Larry", "Paula", "Laura", "Jim"
  ];

  // STEP 10: Loop through every name.
  for (var i = 0; i < names.length; i++) {
    // STEP 11: Compare the first letter without case sensitivity.
    var firstLetter = names[i].charAt(0).toLowerCase();

    // STEP 12: Choose the correct library's speak method.
    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
