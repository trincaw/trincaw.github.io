# trincaw.github.io

Personal site — static HTML and CSS, no build step.

## Structure

```
index.html              home page
styles.css              stylesheet
assets/analytics.js     Cloudflare Web Analytics loader
assets/rickroll.js      devtools detector
```

## Design

Brutalist minimal:

- paper background, black type, one red accent;
- FuturisticArmour for the wordmark and headlines, Arial for body copy,
  monospace for metadata;
- no borders, frames, shadows or rounded corners — separation comes from
  whitespace and type size.

Tokens live at the top of `styles.css` (`--paper`, `--ink`, `--signal`,
`--gutter`, `--max`). Change them there.

## Notes

- Use `--signal` for large accents and `--signal-text` for small red text on
  paper, so links and labels keep enough contrast.
