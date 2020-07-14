FROM node:lts-alpine
EXPOSE 3000
RUN mkdir -p /usr/smartparking
WORKDIR /usr/smartparking
COPY ./ /usr/smartparking
RUN npm install
CMD ["npm", "start"]
