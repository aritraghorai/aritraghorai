#Node block

FROM node:alpine as nodeWork


RUN npm i -g pnpm

WORKDIR /myapp

COPY package.json .

RUN pnpm i

COPY . .

CMD ["npm","run","build"]

#NGINX blick

FROM nginx:1.23.3-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=nodeWork /myapp/dist .

CMD ["nginx","-g","daemon off;"]



