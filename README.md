# AIM Dance site (Astro + Cloudflare + Sveltia CMS)

Edit content in the admin at /admin, or edit the files in `src/content` and `src/data` directly.

- Events, Staff, Pages and programs, Testimonials, Blog: `src/content/*`
- Banner and studio contact info: `src/data/*.json`
- Photos: `public/uploads` (`hero.jpg`, and `genres/ballet.jpg`, `tap.jpg`, `contemporary.jpg`, `lyrical.jpg`, `jazz.jpg`, `hiphop.jpg`)

## Admin login
1. Deploy the `sveltia-cms-auth` Worker (github.com/sveltia/sveltia-cms-auth) to Cloudflare.
2. Create a GitHub OAuth App with callback `https://<your-worker>/callback`; add its Client ID and Secret to the Worker.
3. Set `base_url` in `public/admin/config.yml` to the Worker URL.
4. Add each editor as a Collaborator on the GitHub repo.

## Past events
Events hide at the next build. Create a Deploy Hook in Cloudflare and call it daily to refresh.
