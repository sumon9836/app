FROM node:18
WORKDIR /app
COPY app.js .
RUN npm install axios
CMD ["node", "app.js"]
