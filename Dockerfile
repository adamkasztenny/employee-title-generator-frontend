FROM nginx:1.17.8-alpine

WORKDIR . /src
COPY . .

RUN apk add --update nodejs nodejs-npm

RUN npm install -g yarn react-scripts@3.4.0
RUN npm install
RUN yarn build 

RUN apk del nodejs nodejs-npm

RUN mv ./build/* /usr/share/nginx/html/
RUN mv nginx.conf /etc/nginx/conf.d/default.conf

WORKDIR /
RUN rm -rf /src

RUN addgroup -S employee-title-generator && adduser -S employee-title-generator -G employee-title-generator
USER employee-title-generator

EXPOSE 8081
