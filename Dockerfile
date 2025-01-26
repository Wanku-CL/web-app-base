FROM node:alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM node:alpine
WORKDIR /app
COPY --from=build /app/dist/web-app-base ./
EXPOSE 4000
CMD ["node", "server/server.mjs"]
