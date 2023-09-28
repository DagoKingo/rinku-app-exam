FROM node:erbium-alpine
WORKDIR /app
COPY /dist /app/dist
COPY package.json /app
COPY .env /app
RUN npm install
EXPOSE 2002
CMD ["npm", "run", "start"]