# Instruction

> A Sample Vue.JS project using Firebase Cloud Functions
This project consists on a simple page that uses Firebase Cloud Functions to calculate taxes of a phone calls between different area codes using some fake plans.

## Create a Firebase project
https://firebase.google.com/docs/web/setup

## Configure Firebase Cloud Functions
https://firebase.google.com/docs/functions/get-started

## Build Setup

``` bash
# install all dependencies
npm install && cd functions && npm install

# in the root directory, serve with hot reload at localhost:8080
npm run dev

# in the root directory, build for production with minification
npm run build

# in the root directory, build for production and deploy to firebase
npm run deploy

# run unit tests
npm run test
```

## Test cloud functions locally

``` bash
# install mocha globally
npm install -g mocha

# run unit tests with mocha
mocha functions/test/