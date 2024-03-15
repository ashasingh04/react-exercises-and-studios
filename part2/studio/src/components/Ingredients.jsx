function IngredientList({ data }) {
  return (
    <div key={data.name}>
      <h4>Ingredients:</h4>
      <ul>
        {data.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientList;

//import json file for the data
//use a nested map to get inside the inner array
