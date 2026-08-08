# Studio Lumière — Final QA Notes

Technical QA completed:
- Films removed from all desktop/mobile navigation menus.
- Destinations added to the mobile navigation.
- Home, Stories, Archive, Journal, About, Destinations and Contact routes checked.
- Story detail routes retained for Colombo, Galle, Kandy, Lake Como and Paris.
- Netlify SPA redirect added so direct route refreshes work after deployment.
- Contact form upgraded with validation, Netlify Forms support, success/error states and a local-development notice.
- SEO title/description, Open Graph, Twitter card, favicon, manifest and social preview image added.
- Google Fonts moved from CSS @import to preconnected HTML links.
- Heavy generated story images converted to WebP.
- Large approach image converted to WebP.
- Accessible focus states and reduced-motion support added.
- Placeholder social/ARK II hash links removed while preserving visual credits.

Performance:
- Source image assets reduced from about 27 MB to about 4.5 MB before Vite build.

Static validation:
- JSX syntax parsed successfully.
- All imported local image assets exist.
- Broken internal route candidates: []
- Broken hash-anchor candidates: []

Build note:
- The QA environment could not run npm install because its internal package registry does not currently mirror @vitejs/plugin-react. The source itself passed syntax/static validation. Run `npm install` and `npm run build` on your local machine as the final production build check.
