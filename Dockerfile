FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ENV NODE_OPTIONS="--max_old_space_size=4096"

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
