/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DB_LOCAL: "file:../dist/development.db",
        DB_REMOTE: "file:../dist/production.db"
    }
}

module.exports = nextConfig
