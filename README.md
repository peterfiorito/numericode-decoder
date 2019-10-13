# Decoder

### Setup
The project has two folders, server and client. To have the project fully functional, run `npm install` on each.
Then run `npm start` on both dirs.
The client hosts the front end react app, and its served in localhost:3000 , while the express server will run on localhost:8081.

### Available scripts
#### Client:
``` npm run start ```
Starts webpack-dev-server. You can change port in the config.js file.

``` npm run test ```
Run jest tests.

#### Server:
``` npm run start ```
Starts express server. You can change port in the index file if needed.

``` npm run test ```
Run jest tests for our decode function.

Remember to run `npm install` to install all required dependencies.
