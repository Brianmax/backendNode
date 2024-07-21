FROM node:20.13.1

WORKDIR /app

COPY package.json /app

COPY . /app

RUN npm install


CMD ["npm", "start"]