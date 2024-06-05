#FROM node:14-alpine
#FROM node:22-alpine
FROM ubuntu:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt update
RUN apt install -y nodejs
RUN apt install -y npm
RUN npm install

RUN apt install -y netcat-traditional

COPY . .

EXPOSE 3000

#CMD ["./wait-for-it.sh", "localhost:5432", "--", "npm", "run", "start"]

CMD ["npm", "run", "start"]
