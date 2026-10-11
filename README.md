# Module 4 Coding Assignment — JavaScript Greetings

This is the **graded solution** based on the **harder** starter from the Johns Hopkins/Coursera *HTML, CSS, and JavaScript for Web Developers* course.

## Run it

1. Open `index.html` in Chrome, Edge, or Firefox. It works offline.
2. Press `F12` or `Ctrl+Shift+J` (Windows) and open the **Console** tab.
3. The 10 greeting lines below should appear **in the actual browser console**. The on-page terminal is just a visual preview of the expected output.

```text
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
```

> The official **harder starter code** uses the exact prefix `"Good Bye"` (two words). The assignment summary shortens this to "Goodbye," but the implementation follows the starter's sample output.

## Files

- `index.html` — page + JavaScript files loaded in the correct order.
- `SpeakHello.js` — `helloSpeaker.speak(name)`, implemented in an IIFE.
- `SpeakGoodBye.js` — `byeSpeaker.speak(name)`, implemented in a separate IIFE.
- `script.js` — loops through 10 names and checks `charAt(0).toLowerCase()`.
- `css/style.css` — visual styling only; no effect on the JavaScript assignment.

## Publish for peer review

1. Upload this entire `module4-solution` folder to a GitHub repository.
2. In your repository settings, turn on **GitHub Pages** (usually **Deploy from a branch → main → / (root)**).
3. Visit `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/module4-solution/`.
4. Verify the console output on the published page, then submit that **URL** to Coursera.

## Source

Official starter: https://github.com/jhu-ep-coursera/fullstack-course4/tree/master/assignments/assignment4/assignment4-solution-starter/harder
