import styles from "./Ingredients.module.css";

export default function RecipeIngredients() {
  let ingredients = [
    "Button mushrooms",
    "Rice",
    "Onion",
    "Green Capsicum",
    "Tomato",
  ];
  return (
    <div className={styles.ingredientList}>
      <h3>Recipe Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}
