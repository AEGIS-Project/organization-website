FROM node:13.8.0-alpine3.10

RUN npm install -g serve

COPY package.json /app/
WORKDIR /app
RUN npm install

COPY . .
RUN npm run-script build

CMD ["serve", "-s", "build"]