FROM node:lts

WORKDIR /app

COPY . .

RUN npm install -g pnpm
RUN pnpm setup
RUN pnpm install -g typescript
RUN pnpm install
RUN tsc

EXPOSE 8000

CMD ["pnpm", "run", "start"]
