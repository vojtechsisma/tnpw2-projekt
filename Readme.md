# TNPW2

Credit project for TNPW course at FIM UHK. Backend created with [NestJS](https://nestjs.com/) with PostgreSQL database, frontend using [Astro](https://astro.build/) and [Shadcn UI ](https://ui.shadcn.com/).

To start dev DB run

```
cd be/docker
docker compose up
```

To develop BE locally run

```
cd be
yarn
cp .env.example .env
yarn start:dev
```

Swagger UI should is availible on [http://localhost:3000/docs](http://localhost:3000/docs), OpenAPI json on [http://localhost:3000/docs-json](http://localhost:3000/docs-json)

To develop FE locally run

```
cd fe
yarn
cp .env.example .env
yarn dev
```
