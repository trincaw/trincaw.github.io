# trincaw.github.io

Personal site — static HTML and CSS, no build step.

## Structure

```
index.html              home page
styles.css              one stylesheet for every page
assets/analytics.js     Cloudflare Web Analytics loader, loaded by every page
assets/rickroll.js      devtools detector, loaded by every page
blog/
  index.html            write up index (newest first)
  posts/
    the-dream-machine.html    first write up
    template.html       copy this to start a new write up
```

## Design

Brutalist minimal, shared by every page:

- paper background, black type, one red accent;
- FuturisticArmour for the wordmark and headlines, Arial for body copy,
  monospace for metadata;
- no borders, frames, shadows or rounded corners — separation comes from
  whitespace and type size.

Tokens live at the top of `styles.css` (`--paper`, `--ink`, `--signal`,
`--gutter`, `--max`). Change them there and every page follows.

## Adding a write up

1. Copy `blog/posts/template.html` to `blog/posts/<slug>.html`
   (for example `blog/posts/postgres-indexes.html`).
2. Edit the copy:
   - `<title>` and `<meta name="description">`
   - the `<h1>`, the `<time datetime="...">` value and its visible text
   - the "N min read" label
   - remove `<meta name="robots" content="noindex">` from the copy
   - replace the content inside `<div class="post-body">`
3. Add one entry at the top of the list in `blog/index.html`:

   ```html
   <li>
       <a class="post-row" href="posts/<slug>.html">
           <span class="post-title">Write up title</span>
           <time class="post-date" datetime="YYYY-MM-DD">DD Mon YYYY</time>
       </a>
   </li>
   ```

4. Commit and push. GitHub Pages serves the files as-is.

Keep paths relative: write ups live in `blog/posts/`, so the stylesheet is
`../../styles.css`, the index is `../index.html`, and the home page is
`../../index.html`.

## Notes

- Article body styles cover paragraphs, headings, lists, links, blockquotes,
  inline code, code blocks, images, horizontal rules and tables.
- Code blocks should use `<pre><code>…</code></pre>`; escape `<`, `>` and `&`.
- Use `--signal` for large accents and `--signal-text` for small red text on
  paper, so links and labels keep enough contrast.
