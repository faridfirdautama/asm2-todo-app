FROM node:lts

WORKDIR /app

COPY . .

RUN npm install
RUN npm install pnpm
RUN pnpm install

EXPOSE 8000

CMD ["pnpm", "run", "start"]
