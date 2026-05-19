# Eleventy Writing Portfolio

A clean, literary, minimalist writing portfolio built with Eleventy. Articles are managed from one JSON file and link out to the full pieces elsewhere.

## Features

- Mobile-friendly homepage
- Headshot space at the top of the homepage
- Full-width featured article with hero image
- Three-column article grid on desktop
- Articles stored in `src/_data/articles.json`
- Images stored in `src/images`
- About Me section
- GitHub Pages deployment workflow

## Getting started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm start
```

Build the site:

```bash
npm run build
```

The built site is output to `_site`.

## Editing your site information

Update your name, tagline, email, and headshot path in:

```text
src/_data/site.json
```

Put your headshot here:

```text
src/images/headshot.jpg
```

## Adding and editing articles

All articles live in:

```text
src/_data/articles.json
```

Each article uses this shape:

```json
{
  "title": "Article Title",
  "blurb": "A short description of the piece.",
  "publicationDate": "2026-04-12",
  "photo": "/images/article-photo.jpg",
  "link": "https://example.com/full-article",
  "featured": false
}
```

Set one article to `"featured": true` to display it in the full-width featured section.

Store all article photos in:

```text
src/images
```

## Deploying to GitHub Pages

1. Create a new GitHub repository.
2. Upload or push this project to the repository.
3. In the repository, go to **Settings > Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Push to the `main` branch.
6. The included workflow builds the site and publishes `_site` to GitHub Pages.

The workflow sets Eleventy's `BASE_PATH` automatically to your repository name, which helps assets work correctly for project sites like:

```text
https://yourusername.github.io/your-repo-name/
```

If you use a custom domain or a user site like `yourusername.github.io`, you may set `BASE_PATH` to `/` in `.github/workflows/deploy.yml`.

## Suggested next edits

- Replace placeholder article data in `src/_data/articles.json`.
- Replace placeholder images in `src/images`.
- Rewrite the About Me section in `src/index.njk`.
- Update site metadata in `src/_data/site.json`.

