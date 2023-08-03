# build environment
FROM node:16.20.0 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

ARG REACT_APP_ENV
ENV REACT_APP_ENV ${REACT_APP_ENV}

# RUN echo "nameserver 8.8.8.8" >> /etc/resolv.conf

COPY package*.json /app/
RUN yarn install --frozen-lockfile --network-timeout 300000
COPY ./ /app/
RUN yarn run ${REACT_APP_ENV}

# production environment
FROM nginx:1.17-alpine
COPY --from=build /app/build/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
