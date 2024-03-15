import recipedata from "./recipe.json";

function RecipeName({ data }) {
  return (
    <div key={data.index}>
      <h2>{data.name}</h2>
    </div>
  );
}

export default RecipeName;

//import return the name of the recipe as a level 1 header
