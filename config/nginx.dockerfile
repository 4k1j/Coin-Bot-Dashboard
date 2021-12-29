FROM nginx

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
