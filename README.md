![marvel-vs-dc](https://user-images.githubusercontent.com/904724/38923201-5649f35e-42fa-11e8-890a-30eec5a8e4ba.png)

# nuxt-heroes

> Marvel vs Avengers Heroes demo (for JS Heroes).

## API Setup

> You need MongoDB installed (> v3.4.0)

```
cd api/
yarn # or npm instal
yarn dev # or npm run dev
```

### Deployment

Please run `npm start` with the following envs:

```
NODE_ENV=production
MONGO_URI=<YOUR_DB_URI>
MONGO_DB=<YOUR_DB_NAME>
MONO_JWT_SECRET=<YOUR_JWT_SECRET_STRING>
GITHUB_CLIENT_ID=<YOUR_GH_CLIENT_ID>
GITHUB_CLIENT_SECRET=<YOUR_GH_CLIENT_SECRET>
```

## App Setup

> You need to run the api before running the Nuxt app

```bash
cd app/
yarn # or npm install
yarn dev # or npm run dev
```

### Deployment


Please run `npm start` with the following envs:

```
HEROES_API=<URL_OF_API>
GITHUB_CLIENT_ID=<YOUR_OAUTH_GITHUB_CLIENT_ID>
```

```bash
npm run build
npm start
```
