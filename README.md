# Wesley's Word Lab

A spaced-repetition vocabulary trainer for Wesley, hosted on GitHub Pages.

- **Words** load live from a [Google Sheet](https://docs.google.com/spreadsheets/d/15mCt0Q2wyCr1r2FjonEo8xXSIZWBT0c77GRdyFg1FhY/edit?gid=0) (columns: Date, vocab, part of speech, meaning, my example). Add rows to the sheet and they appear in the app on the next page load.
- **Practice**: 10-question rounds mixing four question types — pick the meaning, pick the word, fill in the blank in Wesley's own example sentence (typing, with spelling tolerance), and letter-tile unscramble.
- **Scheduling**: Leitner boxes. Every word starts at level 1; each correct first-try answer moves it up a level with a longer rest (1, 3, 7, 14 days), a miss sends it back to level 1 and repeats it in the round.
- **Parent tab**: mastery/struggle summary, per-word accuracy and levels, session history, accuracy by question type.
- **Scores** persist in `localStorage` per device. Optional cross-device sync via Supabase: set the `REMOTE` config at the top of the script in `index.html`.

Single static file (`index.html`), no build step.

## Credits

Celebration clips are embedded from GIPHY's CDN rather than copied into this
repo. One is picked at random when a round ends, never repeating twice in a row;
the three celebratory ones are held back on a weak round so the clip matches the
message. A seventh clip plays when the Dragon Balls are cashed in. If a clip
cannot be reached, the app falls back to drawn SVG art so the screen still works
offline.

- https://giphy.com/gifs/super-saiyan-UBB6f0hKhlShy
- https://giphy.com/gifs/dragon-ball-z-goku-hxCB1Qf11SrU4
- https://giphy.com/gifs/anime-dragon-goku-eUIb94IVB7pIBRoF0A
- https://giphy.com/gifs/thumbs-up-goku-dragonball-z-11YMhfLfGoq5Gg
- https://giphy.com/gifs/like-a-boss-125cxELHOpsLra
- https://giphy.com/gifs/goku-dragon-ball-master-roshi-RihThkWxzFENW
- https://giphy.com/gifs/anime-shenron-dragonballdaima-mD78vEbuQRibX0VJrH (dragon summon)
