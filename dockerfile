FROM node:latest

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml /usr/src/app/

RUN pnpm install

COPY ./public/ ./public/
COPY ./mock_data/ ./mock_data/
COPY ./routes/ ./routes/
COPY ./middleman/ ./middleman/
COPY ./views/ ./views/
COPY index.js postcss.config.cjs tailwind.config.cjs tailwind.css ./



EXPOSE 3000
CMD [ "pnpm", "run", "start" ]
