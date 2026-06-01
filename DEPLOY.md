# Deploy Manata

Production domain: `manata.kz`.

The project is a Next.js frontend. Docker builds it as a standalone Node server on port `3000`; Nginx proxies public traffic to it.

## Static handoff: HTML/CSS/JS only

Use this when the customer needs only static files and will host them on any static hosting:

```bash
cd frontend
npm ci
npm run build:static
```

Give the customer the contents of `frontend/out`. That folder contains the generated HTML, CSS, JS, images, fonts, and favicon. It does not need Node.js, Next.js, Docker, or Nginx at runtime.

## Option 1: host Nginx

Use this when Nginx and Certbot are installed directly on the server.

```bash
docker compose up -d --build
```

Issue the certificate before enabling the HTTPS config:

```bash
sudo mkdir -p /var/www/certbot
sudo cp nginx.http.conf /etc/nginx/sites-available/manata.kz
sudo ln -sf /etc/nginx/sites-available/manata.kz /etc/nginx/sites-enabled/manata.kz
sudo nginx -t
sudo systemctl reload nginx
sudo certbot certonly --webroot -w /var/www/certbot -d manata.kz -d www.manata.kz
```

Replace the temporary HTTP site with the HTTPS site:

```bash
sudo cp nginx.system.conf /etc/nginx/sites-available/manata.kz
sudo nginx -t
sudo systemctl reload nginx
```

## Option 2: Nginx in Docker

Use this when ports `80` and `443` should be handled by the `nginx` service from `docker-compose.yml`.

```bash
sudo certbot certonly --standalone -d manata.kz -d www.manata.kz
docker compose --profile proxy up -d --build
```

Renew certificates through the shared webroot while the Nginx container is running:

```bash
docker compose --profile certbot run --rm certbot renew --authenticator webroot --webroot-path /var/www/certbot
docker compose --profile proxy exec nginx nginx -s reload
```

## Useful commands

```bash
docker compose ps
docker compose logs -f frontend
docker compose restart frontend
docker compose pull
docker compose up -d --build
```

Optional environment overrides:

```bash
FRONTEND_PORT=3001 docker compose up -d --build
SITE_URL=https://manata.kz NEXT_PUBLIC_SITE_URL=https://manata.kz docker compose up -d --build
```
