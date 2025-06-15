FROM ubuntu:22.04

RUN apt-get update && apt-get install -y nginx curl unzip

COPY . /var/www/html/
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

EXPOSE 80
CMD ["/usr/sbin/nginx", "-c", "/etc/nginx/nginx.conf"]
