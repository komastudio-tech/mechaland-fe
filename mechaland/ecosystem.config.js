module.exports = {
    apps : [{
      name: 'mechaland_fe',
      script: 'npm',
      args:"start",
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production',
        NEXT_PUBLIC_MECHALAND_API: 'https://api.mechaland.id/',
      }
    }]
  };