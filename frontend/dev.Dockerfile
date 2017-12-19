# Dockerfile for GallerIT frontend in development
FROM node:9.1.0
MAINTAINER digIT <digit@chalmers.it>

# Change to unprevelegied user
USER node:users

# Mount Source files
VOLUME /app

# Switch workspace
WORKDIR /app

# Install dependencies and run!
CMD npm install && npm run dev