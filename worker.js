{
  "name": "cloudflare-worker-multidomain",
  "version": "1.0.0",
  "description": "Cloudflare Worker untuk menangani banyak custom domain",
  "main": "worker.js",
  "scripts": {
    "deploy": "wrangler deploy",
    "dev": "wrangler dev",
    "tail": "wrangler tail"
  },
  "keywords": [
    "cloudflare",
    "worker",
    "custom-domain"
  ],
  "author": "",
  "license": "MIT",
  "devDependencies": {
    "wrangler": "^3.22.0"
  }
}
