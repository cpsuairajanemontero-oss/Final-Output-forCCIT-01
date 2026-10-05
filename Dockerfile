FROM php:8.2-cli
RUN apt-get update && apt-get install -y git unzip libzip-dev libpng-dev libonig-dev libxml2-dev nodejs npm && docker-php-ext-install pdo_mysql mbstring zip gd
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
WORKDIR /app
COPY . .
RUN composer install --no-dev --optimize-autoloader
RUN npm install && npm run build
RUN php artisan key:generate --force || true
EXPOSE 10000
CMD php artisan migrate --force && php artisan serve --host=0.0.0.0 --port=10000
