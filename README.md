# Hmsapp
HmsApp project is an example hospital management system with Admin, User and Doctor roles. It is a full-stack work and is mobile compatible.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

For Angular: Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

For Node.js: It works at http://localhost:3307/ for API access and at http://localhost:3306/ if run with Docker. Redisle uses the 127.0.0.1:6379 server for cache operations. Token information has been kept.

For Swagger: Swagger Api Documentation works at http://localhost:3307/swagger or http://localhost:3306/swagger 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Technologies

<div align="left">
  <img src="https://user-images.githubusercontent.com/25181517/183890595-779a7e64-3f43-4634-bad2-eceef4e80268.png" height="40" alt="angular-logo"  />
  <img width="12" />
  <img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" height="40" alt="node-logo"  />
  <img width="12" />
  <img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" height="40" alt="express-logo"  />
  <img width="12" />
  <img src="https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" height="40" alt="mysql-logo"  />
    <img width="12" />
  <img src="https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png" height="40" alt="docker-logo"  />
  <img width="12" />
  <img src="https://user-images.githubusercontent.com/25181517/182884894-d3fa6ee0-f2b4-4960-9961-64740f533f2a.png" height="40" alt="redis-logo"  />
  <img width="12" />
  <img src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png" height="40" alt="html-logo"  />
  <img width="12" />
  <img src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png" height="40" alt="css-logo"  />
      <img width="12" />
  <img src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" height="40" alt="javascript-logo"  />
  <img width="12" />
  <img src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" height="40" alt="typescript-logo"  />
  <img width="12" />
  <img src="https://user-images.githubusercontent.com/25181517/202896760-337261ed-ee92-4979-84c4-d4b829c7355d.png" height="40" alt="tailwind-logo"  />
  <img width="12" />
  <img src="https://user-images.githubusercontent.com/25181517/186711335-a3729606-5a78-4496-9a36-06efcc74f800.png" height="40" alt="swagger-logo"  />
</div>

## CORS ERROR

It is an error caused by 2 different local servers.

You need to have this line of code in app.js to avoid CORS error. 

```shell
var cors = require("cors");

app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", ["http://localhost:3306","http://localhost:3307"]);
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })

  var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
```

##  Installing the Module

### Node
```
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "mysql": "^2.18.1",
    "redis": "^4.6.11",
    "swagger-ui-express": "^5.0.0"
  }
```

### Angular
```
  "dependencies": {
    "@angular/animations": "^16.2.0",
    "@angular/cdk": "^16.2.12",
    "@angular/common": "^16.2.0",
    "@angular/compiler": "^16.2.0",
    "@angular/core": "^16.2.0",
    "@angular/forms": "^16.2.0",
    "@angular/material": "^16.2.12",
    "@angular/platform-browser": "^16.2.0",
    "@angular/platform-browser-dynamic": "^16.2.0",
    "@angular/router": "^16.2.0",
    "@canvasjs/angular-charts": "^1.0.3",
    "@canvasjs/charts": "^3.7.27",
    "flowbite": "^2.1.1",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.13.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^16.2.9",
    "@angular/cli": "^16.2.9",
    "@angular/compiler-cli": "^16.2.0",
    "@types/jasmine": "~4.3.0",
    "jasmine-core": "~4.6.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "tailwindcss": "^3.3.5",
    "typescript": "~5.1.3"
  }
```

### Docker Processes

- Create a Dockerfile outside the Nodejs project directory. (You need to see the Dockerfile, which can be checked by typing ls)
- Create data in the project directory and copydata in it. (This will be the area where we will work in docker)
- Add the following to the Dockerfile.

```
FROM node:16
WORKDIR /data/copydata
COPY node-mysql /data/copydata
RUN npm install
CMD node app.js
EXPOSE 3306
```

- Paste the following line into the terminal: docker build --tag node-rest-api .
- To check the creation of images in the terminal: docker images
- Paste into terminal to run with Docker: docker run -p 3306:3306 node-rest-api


### Redis Transactions

- brew install redis
- To the terminal: which redis-cli (Exp: /opt/homebrew/bin/redis-cli)
- In the terminal: write open .zshrc and paste: export PATH="/opt/homebrew/bin/redis-server:$PATH"
- redis-server
- Terminal to connect to Redis: redis-cli
- Click on the Nodejs project
- In terminal: npm install --save redis
- come into app.js and add the following

```
const redis = require("redis");
const client = redis.createClient();

//Redis
client.on("error",error => {
    console.error(error);
});

//Redis SET
client.set("test_key","test_value", (error, message) => {
    if(error){
        console.log(error);
    }
    console.log("Message", message);
});
```

## API Usage

### Users API Usage

#### Fetch all users

```http
  GET /api/users
```

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------- |
|  | `string` | Return all users |

#### Fetch selected user

```http
  GET /api/users/${id}
```

| Parameter | Type     | Description               |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of the user to be summoned |

#### Create user

```http
  POST /api/users
```

| Parameter | Type     | Description               |
| :-------- | :------- | :-------------------------------- |
|       | `string` | Post user |

#### Update selected user

```http
  PUT /api/users/
```

| Parameter | Type     | Description               |
| :-------- | :------- | :-------------------------------- |
|       | `string` | Put user |
  
#### Delete selected user

```http
  DELETE /api/users/
```

| Parameter | Type     | Description               |
| :-------- | :------- | :-------------------------------- |
|       | `string` | Delete user |

### Feedbacks API Usage
#### Fetch all feedbacks

```http
  GET /api/feedbacks
```

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------- |
|  | `string` | Return all feedbacks |

#### Fetch selected feedback

```http
  GET /api/feedbacks/${id}
```

| Parameter | Type     | Description               |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of the feedback to be summoned |

#### Create feedback

```http
  POST /api/feedbacks
```

| Parameter | Type     | Description               |
| :-------- | :------- | :-------------------------------- |
|       | `string` | Post feedback |

#### Update selected feedback

```http
  PUT /api/feedbacks/
```

| Parameter | Type     | Description               |
| :-------- | :------- | :-------------------------------- |
|       | `string` | Put feedback |
  
#### Delete selected feedback

```http
  DELETE /api/feedback/
```

| Parameter | Type     | Description               |
| :-------- | :------- | :-------------------------------- |
|       | `string` | Delete feedback |

### Appointments API Usage
#### Fetch all appointments

```http
  GET /api/appointments
```

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------- |
|  | `string` | Return all appointments |

#### Fetch selected appointment

```http
  GET /api/appointments/${id}
```

| Parameter | Type     | Description               |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of the appointment to be summoned |

#### Create appointment

```http
  POST /api/appointments
```

| Parameter | Type     | Description               |
| :-------- | :------- | :-------------------------------- |
|       | `string` | Post appointment |

#### Update selected appointment

```http
  PUT /api/appointments/
```

| Parameter | Type     | Description               |
| :-------- | :------- | :-------------------------------- |
|       | `string` | Put appointment |
  
#### Delete selected appointment

```http
  DELETE /api/appointments/
```

| Parameter | Type     | Description               |
| :-------- | :------- | :-------------------------------- |
|       | `string` | Delete appointment |

### Payments API Usage
#### Fetch all payments

```http
  GET /api/payments
```

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------- |
|  | `string` | Return all payments |

#### Fetch selected payment

```http
  GET /api/payments/${id}
```

| Parameter | Type     | Description               |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of the payment to be summoned |

#### Create payment

```http
  POST /api/payments
```

| Parameter | Type     | Description               |
| :-------- | :------- | :-------------------------------- |
|       | `string` | Post payment |

#### Update selected payment

```http
  PUT /api/appointments/
```

| Parameter | Type     | Description               |
| :-------- | :------- | :-------------------------------- |
|       | `string` | Put payment |
  
#### Delete selected payment

```http
  DELETE /api/payments/
```

| Parameter | Type     | Description               |
| :-------- | :------- | :-------------------------------- |
|       | `string` | Delete payment |

## MySQL Database

A mysql database was created on the website https://www.db4free.net/. An account was created in phpMyAdmin and a database named hms_app_db was created. Users, feedback, appointment and payment tables were created and prepared in the hms_app_db database.


#### User Table Structure.

![User Table Structure](https://github.com/anilyilmaz108/hmsapp/blob/main/github-images/user.png)

#### Feedback Table Structure.

![Feedback Table Structure](https://github.com/anilyilmaz108/hmsapp/blob/main/github-images/feedback.png)

#### Appointment Table Structure.

![Appointment Table Structure](https://github.com/anilyilmaz108/hmsapp/blob/main/github-images/appointment.png)

#### Payment Table Structure.

![Payment Table Structure](https://github.com/anilyilmaz108/hmsapp/blob/main/github-images/payment.png)


## Feedback

If you have any feedback, please contact us at anilyilmaz108@gmail.com.
