// Module 4 Assignment — Steps 6–9
// This module has its own private speakWord (no naming collisions).
(function (window) {
  "use strict";

  // STEP 7: Create the byeSpeaker object.
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  // STEP 8: Attach the speak method to byeSpeaker.
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose only the speaker object globally.
  window.byeSpeaker = byeSpeaker;
})(window);
