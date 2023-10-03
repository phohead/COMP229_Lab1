/*
File Name: COMP229_Lab1
Student Name: Wilson Yang
Student Numb: 301195179
Date: October 03, 2023
*/

// Import 'app' module from './app/app'
const app = require('./app/app');

// Define port number
const port = process.env.PORT || 3000;

// Start Express Server and listen on specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
