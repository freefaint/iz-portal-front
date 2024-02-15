FROM node AS build
WORKDIR /source

ARG PROXY
ENV HTTP_PROXY $PROXY
ENV HTTPS_PROXY $PROXY
#RUN echo '10.4.240.17 nexus.infosec.ru' >> /etc/hosts

# copy and publish app and libraries
COPY . .
RUN node .yarn/releases/yarn-4.1.0.cjs install
RUN node .yarn/releases/yarn-4.1.0.cjs build

# final stage/image
FROM nginx:1.19.6
ARG GRAYLOG_SERVER=localhost
ARG GRAYLOG_PORT=2514
ARG NGINX_TAG=soc_portal_unknown
ARG PROXY

COPY --from=build /source/build /usr/share/nginx/html
COPY ci/default.template /etc/nginx/conf.d/
COPY ci/nginx.conf /etc/nginx/

RUN envsubst '\$GRAYLOG_SERVER,\$GRAYLOG_PORT,\$NGINX_TAG' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf

#RUN echo "Acquire::http::proxy \"${PROXY}\";" >> /etc/apt/apt.conf
#RUN cat /etc/apt/apt.conf
RUN apt-get update && apt-get install -y sudo
#set timezone
RUN sudo rm -f /etc/localtime
RUN sudo ln -s /usr/share/zoneinfo/Europe/Moscow /etc/localtime
