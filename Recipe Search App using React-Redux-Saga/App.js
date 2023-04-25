import React, {useState, useEffect} from 'react'
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import * as types from './redux/actionTypes';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { DirectionsRun } from '@mui/icons-material';
import { ExpandMore } from '@mui/icons-material';




function App() {
  const[search, setSearch] = useState("");
  const[query, setQuery] = useState("chicken");
  const [expanded, setExpanded] = useState(false);
  const[cardValue, setCardValue] = useState("");

  const {recipes} = useSelector(state => state.data);

  
 

  const updateSearch = () => {
    setQuery(search);
    setSearch("");
  }

  let dispatch = useDispatch();
  useEffect (()=> {
    dispatch({type:types.FETCH_RECIPE_START, query});
}, [query]);


const handleExpandClick = (index)=> {
  setExpanded(!expanded);
  setCardValue(index);

};

  return (
    <div className="App">
      <h2>Recipe App</h2>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      id="outlined-basic" 
      variant="outlined" 
      type="text" 
      value={search} onChange={(e) => setSearch(e.target.value)} 
      />
    </Box>

      <Button
       variant="contained" 
       onClick={updateSearch}
       >
            Search
        </Button>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {recipes && recipes.hits && recipes.hits.map((item, index) => (
            <Grid key={index} item> 
               <Card sx={{ width: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.recipe.label}
        subheader={
          <span>
            <DirectionsRun />
            {item.recipe.calories}
          </span>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={item.recipe.image}
        alt={item.recipe.calories}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
  <IconButton
          expand={expanded}
          onClick={() => handleExpandClick(index)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
          </IconButton>
      </CardActions>
      <Collapse in={index === cardValue && expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant='h5'>Ingredients:</Typography>
          {item.recipe.ingredients.map((item) => (
            <Typography paragraph>{item.text}</Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card> 

            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
        {/* {recipes && recipes.hits && recipes.hits.map((item) =>(
          <h4>{item.recipe.label}</h4>
        ))} */}
    </div>
  );
}

export default App;
