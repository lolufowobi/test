FROM node:latest
COPY package*.json ./
RUN npm ci --ignore-scripts
