# nodejs-restful-api
![Migrating your Node.js REST API to Serverless](https://cdn-images-1.medium.com/max/2000/1*5UL0AphTuLNdlLnVsd-7Nw.jpeg "Migrating your Node.js REST API to Serverless")

How to migrate your Node.js REST API to Serverless?

This tutorial will demo how to migrate an existing REST
API using MongodDB as the database to Serverless.

It consist of a User model and controller. The model
defines the data, and the controller will contain all 
the business logic needed to interact with the database. 

It has a db file which will be used to
connect the app to the database, and an app file used
for bootstrapping the application itself.

The server file is used to hook up the app to Serverless.