/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_LOCAL: "file:../dist/development.db",
        DB_REMOTE: "file:../dist/production.db",
        API_URL: "http://localhost:3000",
        WEBSITE_NAME: "BookIT"
    }
}

module.exports = nextConfig
