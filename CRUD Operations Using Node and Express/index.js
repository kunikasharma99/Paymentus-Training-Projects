const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Body Parser for converting the json and url requests based on content type header
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const movies = [
    {id:1, genre:'action'},
    {id:2, genre:'horror'},
    {id:3, genre:'comedy'},
    {id:4, genre:'romantic'},
    {id:5, genre:'thriller'},   
];

//GET Request
app.get('/', async(req, res) =>{
    try {
        res.status(200).json({success:true, allMovies:movies});
        } catch (error) { 
            res.status(400).json({success:false, error});
        
    }
});

//GET Request by id
app.get('/:id', async(req, res) =>{
    const {id} = req.params;
    try {
        const findMovie = movies.find(item => item.id === parseInt(id));
        if(findMovie)
        {
            res.status(200).json({success:true, Movie:findMovie});
        }
        else{
            res.status(404).json({success:false, message: 'The movie with the given ID was not found'})
        }
    } catch (error) {
        res.status(400).json({success:false, error});   
    }
});

//POST Request ( add new )
app.post('/', async(req, res) =>{
    try {
        const newMovie = {
            id: movies.length + 1,
            genre: req.body.genre
        };
        movies.push(newMovie);
        res.status(200).json({success:true, FinalMovies:movies});
        
    } catch (error) {
        res.status(400).json({success:false, error});
        
    }
});

//PUT Request (update)
app.put('/:id', async(req, res) =>{
    const {id} = req.params
    try {
        const findMovie = movies.find(item => item.id === parseInt(id));
        if(findMovie){
            findMovie.genre = req.body.genre;
            res.status(200).json({success:true, updatedMovie :movies});
        }else{
            res.status(404).json({success:false, message: 'The movie with the given ID was not found'});
        }
        
    } catch (error) {
        res.status(400).json({success:false, error});
        
    }
});

//DELETE request
app.delete('/:id', async(req, res) =>{
    const {id} = req.params;
    try {
        const findMovie = movies.find(item => item.id === parseInt(id));
        if(findMovie){
            const index = movies.indexOf(movie);
            movies.splice(index, 1);
            res.status(200).json({success:true , message :"Successfully deleted!!"});
        }else{
            res.status(404).json({success:false, message: 'The movie with the given ID was not found'});
        } 
    } catch (error) {
        res.status(400).json({success:false, error});   
    }
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}...`);
});