FROM node:22-bullseye-slim as build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

# Install npm packages, copy rest of the repo and run build command
RUN npm install
COPY . .
RUN npm run build


FROM nginx:1.19
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html
