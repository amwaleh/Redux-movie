FROM node:6.4

WORKDIR /redux-movies/

ENV PORT=8000

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm" , "start" ]