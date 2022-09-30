FROM nginx
RUN cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
COPY ./build/ /usr/share/nginx/html
