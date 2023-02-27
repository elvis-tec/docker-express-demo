# Dockerized Express.js Web Application Demo

This is an example of a web application developed using Node.js and Express.js, running in a Docker container. The purpose of this project is to demonstrate how Docker can be used to package and distribute a web application in a production environment.

## Prerequisites

Before you can run the application, you'll need to have Docker installed on your system. If you don't have Docker installed already, you can download it from the official website:

- [Docker Desktop for Mac](https://docs.docker.com/docker-for-mac/install/)
- [Docker Desktop for Windows](https://docs.docker.com/docker-for-windows/install/)
- [Docker Engine for Linux](https://docs.docker.com/engine/install/)

## Running the Application with Docker

To run the application with Docker, you first need to build the Docker image using the Dockerfile in the root of the repository. To do so, run the following command in your terminal:

```
docker build -t docker-express-demo .
```


This command will build the image and tag it as "docker-express-demo".

Once the image has been built, you can run a container from the image using the following command:

```
docker run -p 3000:3000 -d docker-express-demo
```

This command will run a container in the background and expose port 3000, which is where the web server of the application is running. You can then access the application in your web browser by visiting the address "localhost:3000".

## Running the Application with Docker Compose

To run the application with Docker Compose, you need to have Docker Compose installed on your system. If you don't have Docker Compose installed already, you can download it from the official website:

- [Install Docker Compose](https://docs.docker.com/compose/install/)

Once you have Docker Compose installed, you can use it to build and run the application. To do so, run the following command in your terminal:

```
docker-compose build
docker-compose up
```


The `docker-compose build` command will build the Docker image of the application, while the `docker-compose up` command will create and start the containers defined in the `docker-compose.yml` file. You can then access the application in your web browser by visiting the address "localhost:3000".

## Project Structure

The repository contains the following files and folders:

- `Dockerfile`: This file contains the instructions to build the Docker image of the application.
- `docker-compose.yml`: This file defines the services used by the application, as well as the network and volume configurations.
- `app.js`: This file is the entry point of the application and contains the configuration of the Express.js web server.
- `public/`: This folder contains the static files of the application, such as CSS and JS.
- `views/`: This folder contains the template files of the application, which are used to generate the web pages.
- `package.json`: This file contains the information of the npm packages used by the application.
- `package-lock.json`: This file is automatically generated by npm and is used to ensure the consistency of the dependencies of the application.