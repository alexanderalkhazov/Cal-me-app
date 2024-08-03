FROM node:20-alpine

COPY . .
WORKDIR /app

RUN npm install

RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]
