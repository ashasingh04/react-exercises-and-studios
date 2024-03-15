import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";
import recipedata from "./components/recipe.json";
import "./App.css";
import "./components/styling.css";

export default function App() {
  return (
    <>
      <h1>My Favorite Recipes</h1>
      {recipedata.map((data, index) => (
        <div key={index} className="container">
          <RecipeName data={data} />
          <div className="innerContainer">
            <RecipeImage data={data} />
            <AuthorInfo data={data} />
            <IngredientList data={data} />
          </div>
          <div></div>
          <div className="bottomContainer">
            <RateARecipe rating={data.rating} />
            <Button saveButton={true} />
          </div>
        </div>
      ))}
    </>
  );
}
