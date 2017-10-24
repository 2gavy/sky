FROM node

ADD ./package.json /app/package.json

RUN cd /app; \
npm install;

ADD . /app

EXPOSE 8080 8079

WORKDIR "/app"

CMD npm run prod