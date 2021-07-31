FROM node:14-alpine

RUN npm install --global serverless

WORKDIR /src/

COPY package.json package-lock.json /src/

RUN npm ci --silent

COPY . . 

CMD ["npm", "run", "local:start"]
