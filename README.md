# Nightcake

<img src="night-cake-logo.png" alt="Night Cake Logo" width="400" height="300" style="padding: 2rem;">

A Node.js Authentication Microservice

## About this project

This project is a lightweight authentication microservice. It mainly implements two functionalities:

1. A sign up route responsible for storing an email-password pair into a MySQL database.
1. A log in route responsible for retrieving an email-password pair from the database, and generating an access token.

### Layers

#### The Router Layer

#### The Service Layer

The Service Layer is located between the Router Layer and the Data Access Layer. It is agnostic to any transport mechanism which means it can receive data from multiple sources and still process it properly. The Service Layer contains the Business Logic of the microservice.

#### The Data Access Layer

## Features

...coming soon

## Running Locally

...coming soon
