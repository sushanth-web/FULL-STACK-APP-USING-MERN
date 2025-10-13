M: MONGODB(DATABASE)
E:EXPRESS JS(BACKEND)
R:REACT JS(FRONTEND)
N:NODE JS(BACKEND)

## Frontend (Browser / Clent side)              Backend (Server)               DB
    React App                                  ExpressJs + NodeJs              MondoDB

step 1 :setup backend

npm init -y in backend folder in terminal
npm i express in backend folder in terminal
npm i nodemon
npm i dotenv to use .env

runs at http://localhost:PORTNUM/


## API Endpoints

GET     /workouts           -->get all workout docs
POST    /workouts           -->creates a new workout doc
GET     /workouts/:id       -->get a single workout doc
DELETE  /workouts/:id       -->deletes a single workout doc
PATCH   /workouts/:id       -->updates a single workout

## DB Setup

npm i mongoose

## FRONTEND

npm create vite@latest frontend -- --template react

cd frontend

npm install

npm i react-router-dom

npx vite

  "proxy":"http://localhost:4000",  add this in our frontend package.json


use this in vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // your backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});


npm i date-fns