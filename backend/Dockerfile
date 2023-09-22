FROM node:16.15 AS dependencies
WORKDIR /usr/src/cleverai
COPY package*.json ./
RUN npm install

FROM dependencies AS builder
COPY ./dist ./dist
COPY .env .
CMD ["node", "./dist/src/server.js"]