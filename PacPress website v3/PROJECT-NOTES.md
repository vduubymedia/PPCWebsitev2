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
- Client-selected images are now installed on all nine industry pages. Each `<img>` retains its unique `data-photo-slot` value so future replacements remain straightforward.

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

### Industry and rental-size photo markup

- Three additional marked-up homepage photos are saved in `references/industry-sizing-markup/`.
- The following client-selected images are installed on the homepage industry cards and the matching industry detail pages:
  - Concrete and Cement Washout: `132127-Solid dischargeX2.jpg`
  - Mining and Aggregates: `800mm at Morenci.JPG`
  - Food and Beverage: `California concentrates.JPEG`
  - Water and Wastewater: `132044-trailer.jpg`
  - Environmental Remediation: `City of Redlands 630-5.JPG`
  - Industrial and Petrochemical: `SSI 40 cu.ft. 800mm # 1471.jpg`
  - Laundry and Process Water: `132065-Laundry market.jpg`
  - Lagoon and Pond Cleanouts: `132334-Environmental market (lagon sludge).tif`
  - Waterjet Sump Cleaning: `132149-General industry-market.JPG`
  - See All Industries: `AECOM-Shell Refinery.jpg`
- The Rental Press Sizes cards use:
  - 5 cu.ft.: `City of Redlands 630-5.JPG`
  - 10 cu.ft.: `132237-Rental press 630.JPG`
  - 15 cu.ft.: `RUSH Energy groundwater remediation.JPEG`
  - 20 cu.ft.: `SSI 40 cu.ft. 800mm # 1471.jpg`
  - 30 cu.ft.: `Cooper Tire.JPEG`
  - 75-100 cu.ft.: `Kemira Mojave fiberglass.JPEG`
- The rental-size introduction uses `IMG_3828.JPEG` for the portable lab press.

## SharePoint source library

- PacPress 2026 website folder:
  https://pacpressco.sharepoint.com/:f:/r/sites/EngineeringtoPurchasing/Shared%20Documents/Pac-Press%20Knowledge%20base/A%20Web%20site%20for%202026?csf=1&web=1&e=iOFdQj

## Rental project stories

- Source document preserved at `references/rental-stories/Rental web site notes.docx`.
- The homepage now uses four complete, source-backed rental stories instead of linking to five placeholder story pages:
  - Seasonal Grape-Juice Filtration at a California Winery
  - Municipal Settling-Pond Dewatering Pilot
  - Industrial Lagoon Remediation at a Decommissioned Chemical Site
  - Bentonite Slurry Dewatering for Seattle's SR-99 Tunnel
- The California winery and municipality remain unnamed, as directed by the source document.
- The industrial-remediation story is described by site type and location rather than naming a company because the source heading and narrative use different company names.
- Figures, durations, equipment sizes, treatment steps, and results were retained from the source. No testimonials or performance claims were invented.
- The industrial-remediation story image is explicitly captioned as a representative configuration because the source document did not identify a matching project photo.

### Additional SharePoint photos added July 27, 2026

- The Rentals page now uses client-owned images from `Vaughn photos`:
  - Hero: `800 HP rental press 2010.JPG`
  - Temporary treatment system: `Big Bertha clarifier tanks.JPG`
  - Support equipment: `470-1 cu.ft test press and precoat tank.JPEG`
  - Industrial application: `Hydrocal CAF sludge in a dairy.JPG`
- The Seattle SR-99 story now uses exact project images instead of a representative rental image:
  - `Tunnel Boring horizontal.JPG`
  - `Big Bertha clarifier tanks.JPG`
- The missing homepage hero video is now supplied by `2m Presses-Panning side to side.MP4`.
- SharePoint site search did not return a document confirming the draft pricing, deployment-time, rental-credit, or included-equipment claims. Keep those claims marked for client confirmation rather than presenting them as verified facts.

## Brand assets

Original logo files are stored in `assets/brand/`:

- `132008-PAC_Logo_BW.ai` - editable master artwork
- `132008-PAC_Logo_BW.jpg` - complete logo with Pacific Press Company line
- `132008-PAC_Logo_BW.gif` - complete logo with Pacific Press Company line
- `132008-PAC_Logo_BW name only.jpg` - horizontal name-only treatment

Do not stretch, redraw, recolor, crop through, or replace the logo with the current generic blue square. Create optimized web derivatives later while preserving these originals.

- Implemented `assets/brand/pacpress-full-logo.webp` as the shared header and footer logo.
- The original AI, JPG, and GIF files remain unchanged in `assets/brand/`.

## Launch-readiness update - July 31, 2026

- Public contact information is now consistent across the site:
  - Sales email: `sales@pacpress.com`
  - Main phone: `714-982-5600`
  - Address: `1215 Fee Ana St., Anaheim, CA 92807`
- Sean Duby's mobile number from the supplied email signature was intentionally not published.
- Draft exact prices, guaranteed deployment timing, rental-credit language, and included-equipment claims were removed because the SharePoint material did not verify them. Those sections now explain the factors used for a project-specific quote.
- The static quote forms prepare a prefilled email to `sales@pacpress.com`. A server-backed form handler can replace this fallback after a hosting or CRM destination is approved.
- Added `robots.txt`, `sitemap.xml`, a branded `404.html`, and a PacPress favicon.
- The sitemap contains the 20 public landing and project-story pages. The printable review page, source references, and uploaded working files are excluded from indexing.
