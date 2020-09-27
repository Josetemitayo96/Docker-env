FROM node:alpine

#create app directory
WORKDIR /app

#install dependencies
COPY package.json /app

ARG tayo
ARG ife
ARG femi

RUN npm install

COPY . .
ENV MSG=$tayo
ENV HOPE=$ife
ENV LOVE=$femi

EXPOSE 5000

CMD node app.js

