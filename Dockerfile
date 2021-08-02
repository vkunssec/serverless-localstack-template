FROM node:14-alpine

WORKDIR /src/

COPY package.json package-lock.json /src/

RUN npm ci --silent

COPY . . 

CMD ["npm", "run", "local:start"]
