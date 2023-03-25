FROM node:latest

RUN curl -fsSL https://get.pnpm.io/install.sh | node - add --global pnpm

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml /usr/src/app/

RUN pnpm install

COPY . .

ENV PORT=8080
EXPOSE 8080
CMD [ "pnpm", "run", "start" ]
