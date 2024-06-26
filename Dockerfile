FROM nginx:alpine
COPY app/index.html /usr/share/nginx/html
COPY app/style.css /usr/share/nginx/html
COPY app/script.js /usr/share/nginx/html

EXPOSE 80
