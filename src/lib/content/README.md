# Content Files Reference

Each file in this folder controls one section of the website. All files use **YAML frontmatter** — structured data between `---` markers at the top — optionally followed by plain Markdown text below.

The YAML frontmatter is the machine-readable part (lists, key/value pairs). The Markdown body below the second `---` is free-form text that gets rendered as HTML.

> **Rule:** Always copy an existing entry when adding new items. YAML is sensitive to indentation — use spaces, not tabs, and keep the structure consistent.

---

## `header.md` — site title and navigation

```yaml
---
title: "The Bank lab"           # Bold part of the header logo
subtitle: "@"                   # Text between title and university
university: "Universität Bern"  # Italic part of the header logo
full_title_link: "/"            # Where clicking the logo goes
university_link: "https://..."  # (currently unused in the template)
nav_links:
  - text: "NEWS"        # Label shown in the nav bar
    href: "/news"       # URL path (must match a route in src/routes/)
  - text: "PEOPLE"
    href: "/people"
---
```

To add a nav link, copy one `- text/href` block and add it to the list.

---

## `footer.md` — footer links and copyright

```yaml
---
copyright: "© 2025 Bank Lab. All rights reserved."
extra_text: "Universität Bern"
sections:
  - links:
      - text: "News"
        href: "/news"
      - text: "People"
        href: "/people"
  - links:
      - text: "Research"
        href: "/research"
---
```

Each item in `sections` becomes a column of links in the footer.

---

## `news.md` — news feed and events

```yaml
---
title: News
items:
  - date: 2026-12-08              # Format: YYYY-MM-DD. Determines Upcoming vs Past.
    title: "Lab Meeting: Name"    # Card headline
    image: /assets/img/news/default-meeting.jpg   # Card image (path under static/)
    content: "Short description. Supports [Markdown links](https://example.com)."

  - date: 2025-11-10
    title: "Past event"
    image: /assets/img/news/default-seminar.jpg
    content: "Description of a past event."
---
```

**How upcoming vs past works:** The news page compares each item's `date` to today's date automatically. No manual categorisation needed — just use the correct date.

**Available default images:**
- `/assets/img/news/default-meeting.jpg`
- `/assets/img/news/default-seminar.jpg`
- `/assets/img/news/default-conference.jpg`
- `/assets/img/news/default-grant.jpg`
- `/assets/img/news/default-defense.jpg`
- `/assets/img/news/default-welcome.jpg`

---

## `people.md` — team members

```yaml
---
title: People
main_image: /assets/img/team/team_25.jpg   # Team photo at top of page
team:
  - name: Claudia Bank
    role: "Principal investigator, Head of Division"
    contact: "claudia.bank@unibe.ch"
    image: /assets/img/team/Claudia_24.jpg   # Path under static/ — no base path prefix
    links: "[Google Scholar](https://...), [ORCID](https://...)"   # Markdown links, comma-separated

  - name: New Member
    role: "PhD student"
    contact: "email@unibe.ch"
    image: /assets/img/team/photo.jpg
    links: .                                 # Use a lone dot if no links yet
---
```

**Image path rule:** Always start with `/assets/img/...` — never include `/banklab-mvp` in the path.

**Adding a new team member:**
1. Upload their photo to `static/assets/img/team/` via GitHub
2. Copy an existing member block and paste it in the right position
3. Update all five fields

---

## `home.md` — home page welcome text

```markdown
---
title: Home
---
Short paragraph shown in the "Welcome!" section of the home page.
Plain Markdown — no special structure needed.
```

---

## `main-welcome.md` — the three cards on the home page

```markdown
---
---
### People card title
Short description for the People card.

---

### Research card title
Short description for the Research card.

---

### Publications card title
Short description for the Publications card.
```

The three sections are separated by horizontal rules (`---`). Each section's `### heading` becomes the card title and the paragraph becomes the card body. The links and icons are fixed in the code.

---

## Other content files

All other pages (`about.md`, `research.md`, `publications.md`, `teaching.md`, etc.) follow a simpler pattern:

```yaml
---
title: Page Title
# other metadata fields specific to that page
---

Free-form Markdown content here.
```

Open the relevant file to see what fields each page uses.

---

## Image paths — important rule

Images in `static/` are referenced in content files as:
```
/assets/img/team/photo.jpg
```

**Not** as:
```
/banklab-mvp/assets/img/team/photo.jpg   ← wrong, do not include the repo name
```

SvelteKit automatically prepends the base path (`/banklab-mvp`) at build time. If you hardcode it, the path gets doubled and the image breaks.
