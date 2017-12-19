# Dockerfile for GallerIT frontend in production
FROM node:9.1.0 AS buildStage
MAINTAINER digIT <digit@chalmers.it>

# Copy Source files
COPY . /app

# change ownership of files
USER root:root
RUN chown -R node:users /app

# Change to unprevelegied user
USER node:users

# Switch workspace
WORKDIR /app

# Install dependencies and build!
RUN npm install && npm run build

##########################
#    PRODUCTION STAGE    #
##########################
FROM nginx:1.13.7-alpine AS productionStage
MAINTAINER digIT <digit@chalmers.it>

COPY --from=buildStage /app/dist /usr/share/nginx/html