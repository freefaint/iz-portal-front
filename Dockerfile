FROM nginx:1.19.6
ENV TZ="Europe/Moscow"

COPY /build /usr/share/nginx/html
COPY ci/default.template /etc/nginx/conf.d/portal.conf
COPY ci/nginx.conf /etc/nginx/
