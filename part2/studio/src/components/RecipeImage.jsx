import recipedata from "./recipe.json";
import "./styling.css";

function RecipeImage({ data }) {
  return <img src={data.recipeImage} alt={data.name} className="recipeImage" />;
}

export default RecipeImage;

//import json file for the data
//apply css for className recipeImage
