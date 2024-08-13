FROM node:lts

WORKDIR /app

COPY . .

RUN npm install -g pnpm
RUN pnpm setup
RUN pnpm i typescript
RUN pnpm i
RUN tsc

EXPOSE 8000

CMD ["pnpm", "run", "start"]
