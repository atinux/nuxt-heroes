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
MONO_JWT_SECRET=<YOUR_DB_NAME>
```

## App Setup

> You need to run the api before running the Nuxt app

```bash
cd app/
yarn # or npm install
yarn dev # or npm run dev
```

### Deployment

> Make sur to give the URL of your API with `API_URL` environement.

```bash
npm run build
npm start
```
