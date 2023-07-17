#MERN AMAZONA

# Lessons

1. Introduction
2. Install Tools
3. Creact React App
4. Create Git Repository
5. Add Data and render it on the landing page through App.js
6. Add routing
   -npm i react-router-dom ...install in the VSCode terminal
   -create route for home screen
   -create router for product sreen
7. Create Node.JS Server
   -run npm init in root folder
   -update package.json set type: module
   -add start command as node backend/server.js
   -require express
   -create route for / return backend is ready.
   -move products.js from frontend to backend
   -create route for /api/products
   -return products
   -run npm start
8. Fetch Products From Backend
   -set proxy in package.json
   -npm install axios
   -use state hook
   -use reducer hook
9. Manage State By Reducer Hook
   -define reducer
   -update fetch data
   -get state from useReducer
10. Add bootstrap UI Framework
    -npm install bootstrap
    -npm install react-bootstrap
    -npm install react-router-bootstrap
    -update App.js as well as index.js
11. Create Product and Rating Component
    -create Rating component
    -create Product component
    -use Rating component in Product component
12. Create Product Details Screen
    -fetch product from backend
    -create 3 columns for image info and action.
13. Create Loading and Message Componenet
    -create loading component
    -use spinner component
    -create utils.js to define getError function.
14. Implement Add To Cart
    -create React Context
    -define reducer
    -create store provider
    -implement add to cart button click handler.
15. Complete Add To Cart
    -check exist item in the cart
    -check count in stock in backend.
16. Create Cart Screen
    -create 2 columns
    -display items list
    -create action column
17. Complete Cart Screen
    -click handler for inc/dec item
    -click handler for remove item
    -click handler for checkout.
18. Create SignIn Screen
    -create signIn form
    -add email and password
    -add signIn button
19. Connect To MongoDB Database
    -create atlas mongodb database
    -install local mongodb database
    -npm install mongoose
    -connect to mongodb database
20. Seed Sample Data
    -create product model
    -create user model
    -create seed route
    -use route in server.js
    -seed sample product
21. Seed Sample Users
    -create user model
    -seed sample users
    -create user routes.
