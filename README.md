# Aden Grand Library

Discover and explore books using the Google Books API. This React application lets you search by keywords, filter by category, paginate through results, and view detailed information for each book in a dedicated page.

## Features

- Instant search powered by Google Books API
- Optional category filtering from curated Google Books subjects
- Pagination controls (prev/next) for large result sets
- Adjustable elements-per-page selector (4/8/12/16)
- Loading, network error, and empty-state visuals
- Book details page with cover, ISBNs, publication info, categories, and language
- Client-side routing with a dedicated detail route: `/book/:id`
- Resilient UI using error boundaries for key sections
- Responsive, modular UI with CSS Modules and reusable components

## Tech Stack

- React 19 + Vite 7 (fast dev server and build tool)
- React Router 7 (routing)
- react-error-boundary (robust error handling)
- ESLint 9 (linting)
- Vitest (test runner; scripts available)

## Getting Started

Prerequisites:

- Node.js 18+ and npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Lint the project:

```bash
npm run lint
```

Run tests (if/when added):

```bash
npm run test
# or
npm run test:ui
# or
npm run test:run
```

## Usage

1. Open the app in your browser (after `npm run dev`).
2. Type a keyword in the "Search" input to query books (e.g., author, title, topic).
3. Optionally choose a Category from the dropdown to refine results.
4. Navigate pages with Prev/Next and adjust elements per page to control the grid size.
5. Click a book cover to open the detailed view in a new tab.

## API

- Search endpoint: `https://www.googleapis.com/books/v1/volumes?q={query}[+subject:{category}]&maxResults=40`
- Details endpoint: `https://www.googleapis.com/books/v1/volumes/{id}`

Notes:

- Results and fields are derived from Google Books API and may vary across titles.

## Project Structure

```
aden-grand-library/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ elements/
│  │  ├─ BookDetails/
│  │  │  ├─ BookDetails.jsx
│  │  │  └─ BookDetails.module.css
│  │  ├─ BookList/
│  │  │  ├─ BookList.jsx
│  │  │  └─ BookList.module.css
│  │  ├─ Content/
│  │  │  ├─ Content.jsx
│  │  │  └─ Content.module.css
│  │  ├─ Fallback/
│  │  │  ├─ Fallback.jsx
│  │  │  └─ Fallback.module.css
│  │  ├─ Header/
│  │  │  ├─ Header.jsx
│  │  │  └─ Header.module.css
│  │  ├─ Home/
│  │  │  ├─ Home.jsx
│  │  │  └─ Home.module.css
│  │  ├─ SearchTerms/
│  │  │  ├─ SearchTerms.jsx
│  │  │  └─ SearchTerms.module.css
│  │  └─ TopBanner/
│  │     ├─ TopBanner.jsx
│  │     └─ TopBanner.module.css
│  ├─ utils/
│  │  ├─ BookExample.js
│  │  ├─ googleBooksCategories.js
│  │  ├─ languageDecoder.js
│  │  ├─ stringShortener.js
│  │  └─ thumbnailProcess.js
│  ├─ App.css
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ eslint.config.js
├─ vite.config.js
├─ package.json
└─ README.md
```

## Components Overview

- Header: Top bar branding and contact
- TopBanner: Simple promotional banner
- Home: Landing page shell combining banner and content
- Content: Composes SearchTerms and BookList with Error Boundaries
- SearchTerms: Keyword input and category selector
- BookList: Fetches, paginates, and renders books; handles loading/error/empty states
- BookDetails: Displays extended information for a specific book id
- Fallback: Error boundary fallback UI and logging

## Utilities

- googleBooksCategories: Static subject list for filtering
- stringShortener: Truncates long strings for cleaner UI
- languageDecoder: Maps ISO codes to human-readable language names
- thumbnailProcess, BookExample: Helpers and example data used during development

## Scripts

Defined in package.json:

- dev: Vite dev server
- build: Production build
- preview: Preview built app
- lint: Run ESLint
- test, test:ui, test:run: Vitest commands

## Notes on Routing

- The application is wrapped in a Browser Router.
- Routes:
  - `/` renders the Home page.
  - `/book/:id` renders the BookDetails page for a selected volume id.
- Book links open in a new tab (`target="_blank"`) and use `rel="noopener noreferrer"` for security.

## Accessibility and UX

- Clear loading and error states give users immediate feedback.
- Empty search state encourages input.
- Keyboard users can navigate inputs and selectors without mouse.
- Titles and author lists include title attributes to reveal full values on hover when truncated.

## Attribution

This project uses the Google Books API and Google Play Books imagery where available. Data and availability are subject to Google’s services and terms.

## Development Status

The app is functional with search, filtering, pagination, routing, and detail views implemented. Linting and test scripts are configured for future quality work.

## Product link
<https://a-alqershi.github.io/Aden_Grand_Library/>
