// import json library
const jsonServer = require('json-server')

// create the server
const mediaPlayerServer = jsonServer.create()

// middleware to parse the json formate
const middleware = jsonServer.defaults()

//setup path to store data
const router = jsonServer.router('db.json')

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// create port for server
const PORT = 4000 || process.env.PORT

// To Listen to the request from the frontend for resolving that request
mediaPlayerServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);    
})
 



