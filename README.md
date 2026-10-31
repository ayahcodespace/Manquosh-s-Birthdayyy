# Birthday Gift Website (single page)

## Everything personal is in `js/main.js` (top `CONFIG` block)
Names, birthday date, quiz questions and answers, sticky notes, the joke lines of the gift button, and the typed message.

## Photos (35)
Put them in `assets/images/` named `1.jpg`, `2.jpg`, `3.jpg` ... `35.jpg` (overwrite the placeholders).
Fewer photos is fine: missing ones are skipped. More? change `photoCount` in `js/main.js`.

## Videos (4)
Put them in `assets/videos/` named `1.mp4`, `2.mp4`, `3.mp4`, `4.mp4`. Each one sits behind a small curtain and stays blurred until she taps it.

## Music
Put your song at `assets/audio/music.mp3`. It plays only when she taps the music button.

## Run locally
Open `index.html` in Chrome.

## Publish with GitHub Pages
Upload everything with `index.html` in the root -> Settings -> Pages -> Deploy from branch `main` / root.
Important: the quiz, the curtains and the blur are only for the experience. They are NOT security: anyone with the link can read the answers in the code and open the video files directly. A private repository does not make the published site private.
