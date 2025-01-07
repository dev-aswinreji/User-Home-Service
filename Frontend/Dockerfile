FROM archlinux:latest

RUN pacman-key --init && \
    pacman -Syu yarn --noconfirm 

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install 

COPY . /app/

EXPOSE 4003

CMD ["yarn","dev","--host"]
