# colinfutrelle.com

Personal site for Colin Futrelle — a product/engineering leadership profile with
two sections: Professional and Outdoor Athlete (rock climbing, mountaineering,
and backcountry skiing).

Plain HTML/CSS, no build step, no framework. Hosted free on Cloudflare Pages,
auto-deployed from this repo's main branch.

## File structure

```
index.html                     Homepage — one row per section (Professional, Outdoor Athlete)
professional.html              Professional story, work history, testimonials
outdoor-athlete.html           Rock Climber, Mountaineer, and Backcountry Skier sections
style.css                      All site styling (single shared stylesheet)
site.js                        Light/dark/auto theme toggle logic
README.md                      This file

professional-headshot.jpg      Homepage photo, Professional row
product-management-diagram.jpg Hero image on professional.html
climbing.jpg                   Rock Climber photo (homepage Outdoor Athlete row + outdoor-athlete.html)
glacier-team.jpg               Mountaineer photo (outdoor-athlete.html)
ski-team.jpg                   Backcountry Skier photo (outdoor-athlete.html)
```

Every page links to the same `style.css` and `site.js`, so a styling change in
one place applies everywhere. There's no templating, so shared markup (the
header nav, the footer) is duplicated at the top/bottom of each HTML file —
if you change the nav or footer, update it in all three `.html` files.

## Making changes

1. Edit the relevant `.html`, `.css`, or image file locally.
2. Preview by opening the `.html` file directly in a browser — no server or
   build step needed.
3. Commit and push to `main`:
   ```
   git add .
   git commit -m "describe the change"
   git push
   ```
4. Cloudflare Pages redeploys automatically on every push to `main`, usually
   live within a minute. No manual deploy step.

## Adding a new photo

Images are referenced by plain relative filenames (e.g. `src="climbing.jpg"`),
sitting in the repo root alongside the HTML — no `/images` subfolder. Keep it
that way; a missing subfolder was the cause of a broken-image layout bug
earlier in this site's history.

When adding a new photo:
- Keep file sizes reasonable (compress/resize before committing — most
  photos in this repo are under 200KB).
- Match the existing pattern: homepage rows use `<img class="crop">`,
  images on the section pages use `<img class="story-hero">`.

## Hosting

- **DNS + domain:** Cloudflare (colinfutrelle.com)
- **Hosting:** Cloudflare Pages, connected to this repo, auto-deploy on push
  to `main`
- **Cost:** $0 for hosting; only the annual domain renewal through Cloudflare

## Fonts

Headers use Merriweather, loaded via Google Fonts in each page's `<head>`.
Body text is Arial/Helvetica (system font, no external load needed).
