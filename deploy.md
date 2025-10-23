
✅ Шаг 1: Установи Node.js, NPM и PM2
```bash
apt update && apt upgrade -y
apt install -y nginx curl git nodejs npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2
```

✅ Шаг 2: Разверни SvelteKit-приложение
(Ключ в .env)
```bash
git clone https://onedal:${GIT_TOKEN}@github.com/CrawlerX-parsers/kolmogorov-cv.git kolmogorov.dev
cd kolmogorov.dev
npm install
```

✅ Шаг 3: Копируем енвы и сбор и запуск
```bash
npm run build
PORT=3010  pm2 start build/index.js --name kolmogorov-cv
pm2 startup
pm2 save
```

✅ Шаг 4: Установи и настрой Nginx
```bash
sudo apt install nginx -y
sudo systemctl enable nginx
```
Создай конфиг:
```
sudo nano /etc/nginx/sites-available/kolmogorov.dev
```

```nginx
server {
    listen 80;
    server_name kolmogorov.dev www.kolmogorov.dev;

    location / {
        proxy_pass http://127.0.0.1:3010;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Прокси для основного sitemap.xml
    location = /sitemap.xml {
        proxy_pass https://storage.yandexcloud.net/storage-crawlerx/sitemaps/provider_15/sitemap.xml;
        proxy_set_header Host storage.yandexcloud.net;
    }

    # Прокси для всех /sitemaps/provider_15/sitemapX.xml
    location ~ ^/sitemaps/provider_15/sitemap(\d+)\.xml$ {
        proxy_pass https://storage.yandexcloud.net/storage-crawlerx/sitemaps/provider_15/sitemap$1.xml;
        proxy_set_header Host storage.yandexcloud.net;
    }
    
}
```

Активируй сайт:
```bash
sudo ln -s /etc/nginx/sites-available/buzztv.org /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Шаг 5: Получи SSL через Let’s Encrypt (Certbot)
```bash
sudo apt install certbot python3-certbot-nginx -y
```

Сгенерируй сертификат:
```bash
sudo certbot --nginx -d buzztv.org -d www.buzztv.org
```

Проверка автоматического обновления:
```bash
sudo certbot renew --dry-run
```

---
CDN
1. Создай статический внешний IP
    1.	Перейди в VPC Network → External IP addresses
    2.	Нажми “RESERVE STATIC ADDRESS”
    3.	Имя: cdn-buzztv-ip
    4.	Тип: Global
    5.	Нажми Reserve

Скопируй IP — он нужен для DNS.

2. Настрой Frontend (входящий трафик)
   •	Название: cdn-frontend
   •	Protocol: HTTPS
   •	IP: выбери ранее созданный cdn-buzztv-ip
   •	Port: 443
   •	SSL Certificate: нажми “Create a new certificate”
   •	Название: cdn-ssl-cert
   •	Домен: cdn.buzztv.org
   •	Тип: Google-managed
   •	Нажми Done

3. Добавь DNS A-запись
У себя в DNS-панели (например, на Cloudflare, Reg.ru или Namecheap):
cdn.buzztv.org  A  <внешний IP из шага 1>
---
Restart
```bash
git pull https://onedal:${GIT_TOKEN}@github.com/CrawlerX-parsers/buzztv-sveltekit.git
npm run build
pm2 stop buzztv
pm2 start build/index.js --name buzztv
```