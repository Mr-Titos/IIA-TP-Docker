FROM nginx:1.24.0

WORKDIR /home/nginx/

RUN rm /usr/share/nginx/html/*

COPY . /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf.template

EXPOSE 80

COPY docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]