FROM node:18
WORKDIR /usr/src/app
RUN npm install -g nodemon
RUN npm install -g ts-node-dev
RUN npm install -g socket.io 
RUN npm install -g cors
RUN npm install -g express
RUN npm install -g express@4
RUN npm install -g superagent@6.1.0
RUN npm install -g request
CMD npm install cors --save && npm install && npx nodemon --legacy-watch server.js