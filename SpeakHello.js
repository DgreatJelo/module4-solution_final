// Module 4 Assignment — Steps 2–5
// Keep each library's variables private using an IIFE.
(function (window) {
  "use strict";

  // STEP 3: Create the helloSpeaker object.
  var helloSpeaker = {};
  var speakWord = "Hello";

  // STEP 4: Attach the speak method to helloSpeaker.
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose only the speaker object globally.
  window.helloSpeaker = helloSpeaker;
})(window);
