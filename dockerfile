FROM node:latest

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml /usr/src/app/

RUN pnpm install

COPY ./public/ ./public/
COPY ./routes/ ./routes/
COPY ./views/ ./views/
COPY ./* .


EXPOSE 3000
CMD [ "pnpm", "run", "start" ]
