# Studio Lumière — Corrected Clean Hero

This is the clean replacement build after reverting the broken inline-nav patch.

## Changes
- Uses the exact approved 4:3 hero image.
- Hero focal point is shifted lower visually so the groom's full head remains visible.
- Large editorial typography overlaps the bride on desktop.
- Desktop uses inline HOME / STORIES / FILMS / JOURNAL / ABOUT navigation.
- The small circle opens a compact right-side menu panel instead of a giant fullscreen menu.
- Menu panel is fully scrollable.
- Mobile uses a full-width scrollable menu with smaller typography.
- Desktop/mobile hero crops are independent.

## Run
npm install
npm run dev


## Readability + navigation pass
- Desktop uses a single navigation only: HOME / STORIES / FILMS / JOURNAL / ABOUT / CONTACT.
- Removed the duplicate desktop circle/panel navigation.
- Mobile keeps one compact MENU button and scrollable fullscreen menu.
- Increased all supporting hero text sizes without changing the main hero heading.
- Enlarged logo, location label, nav links, index rail, subtitle and scroll prompt.


## Loader flash fix
A lightweight critical boot loader is rendered directly by index.html before React or the main stylesheet loads. React then takes over seamlessly, eliminating the white/blank flash before the animated loader.


## Critical black-screen fix
The previous ZIP was missing imports for the new homepage section images, which prevented React from mounting. All new assets are now correctly imported, and the HTML boot layer is removed only after React has successfully initialized.


## Final homepage polish
- Dedicated cinematic films visual.
- Dedicated photographer portrait in Artist section.
- Real burgundy feather/floral commission artwork.
- Five distinct story images.
- Worldwide destination transition.
- Larger supporting typography for readability.
- Upgraded editorial footer with socials and story thumbnail.
- ARK II credit restored: “Designed & Developed by ARK II”.


## Story routing fix
- Homepage STORIES navbar now opens /stories instead of scrolling to #stories.
- Homepage ARCHIVE opens /archive.
- Mobile Stories/Archive links use page routes.
- Selected Stories homepage cards open their matching Story Detail pages.
- Footer Stories and latest-story links use page routes.


## Inner footer system
- Stories and Archive now use a simplified Studio Lumière footer.
- Story Detail pages use a minimal footer.
- ARK II design/development credit appears on all page types.


## Final page suite
- Journal page
- About page
- Destinations page
- Contact page
- 404 page
- Real route wiring from homepage + inner navigation
- Simplified or minimal footer system with ARK II credit
- Mobile responsive layouts for all new pages
