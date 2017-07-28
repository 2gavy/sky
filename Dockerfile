FROM node

ADD . /app

RUN cd /app; \
npm install;

EXPOSE 8080 8079

WORKDIR "/app"

CMD npm run dev -s