FROM node:16-alpine as build-stage

WORKDIR /app
COPY package*.json /app
RUN npm cache clean -f
RUN apk add git
RUN npm install -g npm@8
RUN npm install --legacy-peer-deps
COPY . ./

RUN npm run build

# nginx state for serving content
FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*

COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]