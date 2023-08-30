FROM --platform=linux/amd64 node:20-alpine

ARG NODE_ENV
ARG CACHE_TTL
ARG YOUTUBE_API_KEY
ARG YOUTUBE_CHANNEL_ID

ENV NODE_ENV=$NODE_ENV
ENV CACHE_TTL=$CACHE_TTL
ENV YOUTUBE_API_KEY=$YOUTUBE_API_KEY
ENV YOUTUBE_CHANNEL_ID=$YOUTUBE_CHANNEL_ID

WORKDIR /app


COPY package.json package-lock.json ./
COPY docker-entrypoint /usr/bin/docker-entrypoint
RUN chmod +x /usr/bin/docker-entrypoint
COPY ./src ./src

EXPOSE 3000

ENTRYPOINT [ "docker-entrypoint" ]

