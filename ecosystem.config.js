module.exports = {
  apps: [
    {
      name: "mock",
      script: "./bin/www",
      watch: true,
      env: {
        NODE_ENV: "production",
        CURRENT_ENV: 'prod'
      }
    }
  ]
}
