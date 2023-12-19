FROM node:16

WORKDIR /app

COPY . /app

RUN apt update \
    && apt install --assume-yes --no-install-recommends \
        build-essential \
        python3

RUN npm install

EXPOSE 3002

CMD [ "npm", "start" ]