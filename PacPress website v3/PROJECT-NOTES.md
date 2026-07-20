# PacPress Website V3 - Working Notes

## Industry page direction

- The industry pages currently feel too buzzword-heavy.
- Reduce generic marketing language and repeated claims.
- These are supporting SEO/GEO landing pages, not full primary-site pages.
- Keep them focused, useful, and shorter than the main rental and company pages.
- Add real application and equipment photos so the pages feel credible and specific.
- Use one strong industry image, one process/equipment image, and an optional real project image or story where available.
- Do not invent field stories, results, statistics, or technical claims.
- Keep clear internal links back to the main Rentals page, relevant guides, project stories, and Contact.

### Simplified industry template implemented

- Each industry page now opens with one relevant image, a short description, and two direct actions.
- `Common Rental Applications` appears before `When Renting Makes Sense`.
- Removed the separate problem statement and repeated four-step rental-process sections.
- Replaced the long sizing checklist with one compact sizing and quote prompt.
- Reduced each page to two useful FAQs and three simple internal links.
- Current industry images are temporary relevant field photos. Each `<img>` has a unique `data-photo-slot` value so the client-selected replacement can be swapped in directly later.

## Client review materials

- Three marked-up homepage photos were received and saved in `references/homepage-markup/`.
- Use its handwritten numbers to match selected photos to website positions.
- Preserve original photos and create optimized web copies when implementing them.

### Homepage markup transcription

Do not implement uncertain readings until the matching SharePoint files have been inspected.

- Homepage hero image candidates:
  - `132048` - corrected by the client; handwritten as `trailer.tif`
  - `132044` - handwritten as `trailer.jpg`
- Filter Presses in the Field:
  - Industrial Site Installation: `132154` - appears to reference a Rentals image
  - Trailer-Mounted Rental Unit: `132236` - appears to reference a Rentals image
  - Lagoon Sludge Removal: `132334`; note says to find a similar photo online
  - Urban Environmental Project: `132378` - marked `Env.`
  - Open-Pit Mine Installation: use a `1200`, `225 PSI` frame image; exact filename is not yet clear
- Industrial Site Installation copy edit:
  - Replace the crossed-out reference to `mining` with `EPA Superfund site`.
  - Implemented as: `A trailer-mounted PacPress unit provided interim dewatering at an EPA Superfund site while the permanent filter press was being built.`

### Implemented field-photo matches

- Industrial Site Installation: `132154-Rentals.JPG`
- Trailer-Mounted Rental Unit: `132236-Rentals.JPG`
- Lagoon Sludge Removal: `132334-Environmental market (lagon sludge).tif`
- Urban Environmental Project: `132378-Environmental market.tif`
- Open-Pit Mine Installation: `1200mm 225 psi frame.JPG`

## SharePoint source library

- PacPress 2026 website folder:
  https://pacpressco.sharepoint.com/:f:/r/sites/EngineeringtoPurchasing/Shared%20Documents/Pac-Press%20Knowledge%20base/A%20Web%20site%20for%202026?csf=1&web=1&e=iOFdQj

## Brand assets

Original logo files are stored in `assets/brand/`:

- `132008-PAC_Logo_BW.ai` - editable master artwork
- `132008-PAC_Logo_BW.jpg` - complete logo with Pacific Press Company line
- `132008-PAC_Logo_BW.gif` - complete logo with Pacific Press Company line
- `132008-PAC_Logo_BW name only.jpg` - horizontal name-only treatment

Do not stretch, redraw, recolor, crop through, or replace the logo with the current generic blue square. Create optimized web derivatives later while preserving these originals.

- Implemented `assets/brand/pacpress-full-logo.webp` as the shared header and footer logo.
- The original AI, JPG, and GIF files remain unchanged in `assets/brand/`.
