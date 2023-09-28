FROM node:erbium-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 2002
CMD ["npm", "run", "start"]
