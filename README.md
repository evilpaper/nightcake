# Nightcake

<img src="night-cake-logo.png" alt="Night Cake Logo" width="400" height="300" style="padding: 2rem;">

A Node.js Authentication Microservice

## About this project

This project is a lightweight authentication microservice. It mainly implements two functionalities:

1. A sign up route responsible for storing an email-password pair into a MySQL database.
1. A log in route responsible for retrieving an email-password pair from the database, and generating an access token.

### Layers

#### The Router Layer

The Router Layer contains the API routes of the application. It is responsible for parsing and validating the payload of incoming requests and forwarding the parsed data to the Service Layer as well as translate the call into a valid HTTP response before sending it back to the client.

#### The Service Layer

The Service Layer is located between the Router Layer and the Data Access Layer. It is agnostic to any transport mechanism which means it can receive data from multiple sources and still process it properly. The Service Layer contains the Business Logic of the microservice.

#### The Data Access Layer

The Data Access Layer is responsible for performing input/output operations outside of the application’s boundaries, such as communicating with the database.

## Features

- Signup
- Login
- Validation
- Custom Error
- Unit tests with Jest
- API documentation with Swagger

## Getting stated

### Prerequisites

To run the project you need to have the following installed on your machine:

- Node.js
- Docker

### Installation

First: Clone the Git repository

```
$ git clone https://github.com/evilpaper/nightcake
```

Second: Install the dependencies

```
$ cd project && npm install
```

### Configuration

To run the project you must first add environmental variables in the `config` directory.

EX. DEVELOPMENT:

```
SERVER_PORT=3000
JWT_SECRET="the-jwt-secret"
DATABASE_NAME=authentication
DATABASE_USER=admin
DATABASE_PASSWORD=admin
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_DIALECT=mysql
DATABASE_LOGGING=TRUE
DATABASE_SYNC=TRUE
```

### Usage

To run the server in _development_ mode.

Create and run a Docker container for the MySQL database:

```
$ docker run -d -p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=root \
-e MYSQL_DATABASE=authentication \
-e MYSQL_USER=admin \
-e MYSQL_PASSWORD=admin \
mysql:8
```

You can validate the the container is up and running by using:

```
$ docker ps
```

When the container is up. Start the service with:

```
$ npm run dev
```

## Tests

To run the unit tests:

```
$ npm run test-unit
```

### Testing the endpoints with curl in development

Once the service is runniing you can test the endpoints with curl.

#### Should return HTTP 400 (Bad Request) when given invalid email address.

```
$ curl -i -X POST \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'email=user&password=papasmurf' \
127.0.0.1:3000/auth/login
```

#### Should return HTTP 400 (Bad Request) when given a password that is too short.

```
$ curl -i -X POST \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'email=user&password=papa' \
127.0.0.1:3000/auth/login
```

#### Should return HTTP 404 (Not Found) when given a user that does not exist.

```
$ curl -i -X POST \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'email=user@mail.com&password=clumsysmurf' \
127.0.0.1:3000/auth/login
```

#### Should return HTTP 201 (Created) when given valid email and password on signup.

```
$ curl -i -X POST \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'email=user@mail.com&password=clumsysmurf' \
127.0.0.1:3000/auth/signup
```

#### Should return HTTP 409 (Conflict) when given same already taken email on signup.

```
$ curl -i -X POST \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'email=user@mail.com&password=clumsysmurf' \
127.0.0.1:3000/auth/signup
```

##### Should resturn HTTP 200 (OK) when given valid email and password on login.

```
$ curl -i -X POST \
-H 'Content-Type: application/x-www-form-urlencoded' \
-d 'email=user@mail.com&password=clumsysmurf' \
127.0.0.1:3000/auth/login
```

## API Reference

You can access the API documentation at: http://127.0.0.1:3000/docs

## Authors

- Pelle Lundgren
- Razvan Ludosanu

## License

MIT
