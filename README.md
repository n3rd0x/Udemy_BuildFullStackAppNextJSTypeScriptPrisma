# Education - NextJS & TypeScript
Udemy - Build Full Stack Apps with NextJS & TypeScript

Link: https://www.udemy.com/course/nextjs-build-full-stack-apps-with-nextjs-using-redux


## Prerequisites
- NodeJS (>= 10.13)


## New Project
```
npx create-next-app bookit

Would you like to use TypeScript?       => Yes
Would you like to use ESLint?           => No
Would you like to use Tailwind CSS?     => No
Would you like to use `src/` directory? => No
Would you like to use App Router?       => Yes
Would you like to customize the default import alias (@/*)? => No

# (Optional) Disable telemetry
npx next telemetry disable

# Install dependencies:
# --save => Write the package into package.json
npm install next-connect --save

# Run development on localhost:3000
npm run dev
```


## Setup Prisma for SQLite Database
Using SQLite for development purpose.

```
# Install Prisma & SQLite, this includes Prisma CLI tools
npm install prisma sqlite --save

# Alternative, install the prisma client package.
npm install @prisma/client

# Initialise a schema if not exists.
npx prisma init --datasource-provider sqlite

# Generate the databas if not exists.
npx prisma migrate dev --name <Name>

# Generate database based on schema (needs to be defined).
npx prisma generate

# Format schema and autofix relations
npx prisma format

# Run 'production mode' under development (testing purpose).
NODE_ENV=production npm run dev
```


## Tailwindcss
```
# Install
npm install -D tailwindcss postcss autoprefixer

# Initialise with configuration file
npx tailwindcss init -p
```


## Prisma Schema
Example.

```
// Define data source.
datasource db {
    provider = "sqlite"
    url      = "file:dist/main.db"
}


// Define client (JavaScript or TypeScript).
generator client {
    provider = "prisma-client-js"
}


// Define models.
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}
```


## Auto Generate Interface of Schema
```
# Install prisma-typegen package
npm install @@kalissaac/prisma-typegen

# Usage (generate 'index.ts' in output path):
npx prisma-typegen <OutputPath>
```


**Environment File (NOT WORKING)**
```
# .env.development
DATABASE_URL="file:development.db"

# .env.production
DATABASE_URL="file:production.db"


# Generate based on the environment file.
npx prisma generate --env-file <EnvFile>

# Example:
npx prisma generate --env-file .env.development
```

## Prisma Studio
Prisma studio is a localhost service for manage the database.

```
# Usage:
npx prisma studio
```


## Dependencies

- **Next Connect**
    - Efficiency handles routes
- **Prisma**
    - Object-Relational Mapping (ORM) for simplifies database access and management by providing a type-safe and intuitive way to interact with databases.


## Tools

- **Visual Studio Code**
    - **Tunder Client**
        - Easy way to use GET, PUT, POST (like Postman)


## Resources
- Github (https://github.com/ghulamabbas2/bookit-v2)

