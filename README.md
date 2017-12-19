# GallerIT
A photo discovering service.

### Features

## Production

### Example compose file
```yml
version: '2.2'
services:
  gallerit:
    build:
      context: .
      dockerfile: Dockerfile
    image: gallerit
    ports:
      - "80:80"
```

## Development

### Software requirements
* docker
* docker-compose

### Setup
Run the following command:
1. Make sure to remove the frontend/node_modules folder if you have one
2. `docker-compose up`

### Local production environment
You can compile and build the production image with your local codebase using:
`docker-compose -f prod.docker-compose up --build`