import axios from "axios"

const YOUR_APP_KEY = "2db806baed40b8b2a9b638da02e44fdb"
const YOUR_APP_ID ="919622b1"



export const getRecipes = async (query) =>
{
    const url =`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    return await axios.get(url);

}