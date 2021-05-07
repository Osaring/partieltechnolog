FROM node:current-alpine

WORKDIR /usr/src/app

#Declaration et attribution de variable
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV


RUN npm install

CMD ["npm", "build"]
CMD ["npm", "start"]
