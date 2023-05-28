const http = require('http');
const fs = require('fs');
const fileName = 'movies.json';

//Read the data from the file (GET)
function readDataFromFile() {
    try {
      const data = fs.readFileSync(fileName);
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

//Write the data to file (POST)
function writeDataToFile(data) {
    fs.writeFileSync(fileName, JSON.stringify(data, null, 2));
  }

//Create new addition in file
function createMovie(movie) {
    const movies = readDataFromFile();
    const newMovie = { id: movie.id, genre: movie.genre };
    movies.push(newMovie);
    writeDataToFile(movies);
  }
  
//Read all the data after addition
function getAllMovies() {
    return readDataFromFile();
  }

//Read movie by ID (GET)
function getMovieById(id) {
    const movies = readDataFromFile();
    return movies.find(movie => movie.id === id);
  }
  
//Update movie by ID
function updateMovie(id, updatedMovie) {
    const movies = readDataFromFile();
    const index = movies.findIndex(movie => movie.id === id);
    if (index !== -1) {
      movies[index].genre = updatedMovie.genre;
      writeDataToFile(movies);
      return true;
    }
    return false;
  }

//Delete movie by ID
function deleteMovie(id) {
    const movies = readDataFromFile();
    const index = movies.findIndex(movie => movie.id === id);
    if (index !== -1) {
      movies.splice(index, 1);
      writeDataToFile(movies);
      return true;
    }
    return false;
  }
  
// //Test the CRUD Operations
// // Create a new movie
// createMovie({ id: 6, genre: 'drama' });

// // Read all movies
// const allMovies = getAllMovies();
// console.log(allMovies);

// // Read a specific movie by ID
// const movieById = getMovieById(2);
// console.log(movieById);

// // Update a movie by ID
// const isUpdated = updateMovie(3, { genre: 'action-comedy' });
// console.log(isUpdated);

// // Delete a movie by ID
// const isDeleted = deleteMovie(4);
// console.log(isDeleted);


