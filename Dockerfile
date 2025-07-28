FROM node:latest
COPY package*.json ./
RUN npm i --ignore-scripts

# Add os lib with low vulnerability for testing
RUN apt-get update \
    && apt-get --no-install-recommends -y install curl \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
