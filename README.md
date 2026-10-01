# AIM Dance site (Astro + Cloudflare Pages + Sveltia CMS)

## Run locally
    npm install
    npm run dev

## Deploy
1. Create a GitHub repo and push this folder to `main`.
2. Cloudflare dashboard > Workers & Pages > Create > Pages > connect the repo.
   Build command `npm run build`, output directory `dist`.
3. Add the custom domain aimdanceny.com in the Pages project.

## Turn on the admin (/admin)
1. Deploy the `sveltia-cms-auth` Worker (github.com/sveltia/sveltia-cms-auth) to Cloudflare.
2. Create a GitHub OAuth App; callback URL is `https://<your-worker>/callback`.
   Put its Client ID and Secret in the Worker's environment variables.
3. In `public/admin/config.yml`, set `repo` and `base_url`.
4. Give each staff editor access to the GitHub repo (Collaborator).

## Expire past events automatically
Events hide on the next build. In Pages > Settings > Builds, create a Deploy Hook and
call it daily with a free cron service or a Cloudflare Cron Worker.

## Photos
Drop files in `public/uploads`: `hero.jpg`, and `genres/ballet.jpg`, `tap.jpg`,
`contemporary.jpg`, `lyrical.jpg`, `jazz.jpg`, `hiphop.jpg`.
