# Smart-Parking

DB-Schema Link: https://dbdesigner.page.link/E859dbo61UgSLYWn8

**Note:** The database is not deployed in the local system. I've used PSQL SaaS to ease out the task.

This is a node application with the express framework.
The model definitions are present inside the model directory.

All the required APIs are present inside the routes directory with all the service logic as well.

I've tested the logic based on mock data.
I've also created a docker file to build the docker image and deploy it easily.

# Usage:
1. git clone the directory into your local system.
2. Change directory into the cloned one.
3. Run `npm i` to install all the npm packages.
4. Run `npm start` to run the node app.
5. To run in development mode with nodemon run the command: `npm run devstart`
6. After this the web server will be started on port `3000`. Simply check the routes using curl, postman or any other client.
