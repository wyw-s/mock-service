module.exports = {
  apps: [
    {
      name: "mock",
      script: "./bin/www",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: '9999',
        HOSTNAME: 'localhost',
      }
    }
  ]
}
