
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
git clone https://github.com/onedal/kolmogorov-cv.git kolmogorov.dev
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
        proxy_pass http://127.0.0.1:3090;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    
}
```

Активируй сайт:
```bash
sudo ln -s /etc/nginx/sites-available/kolmogorov.dev /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Шаг 5: Получи SSL через Let’s Encrypt (Certbot)
```bash
sudo apt install certbot python3-certbot-nginx -y
```

Сгенерируй сертификат:
```bash
sudo certbot --nginx -d kolmogorov.dev -d www.kolmogorov.dev
```

Проверка автоматического обновления:
```bash
sudo certbot renew --dry-run
```
