FROM node:16
WORKDIR /data/copydata
COPY node-mysql /data/copydata
RUN npm install
CMD node app.js
EXPOSE 3306