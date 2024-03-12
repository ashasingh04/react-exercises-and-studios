import styles from "./Description.module.css";
import React from "react";

function RecipeAuthor() {
  let authorLink = "https://www.sanjeevkapoor.com/";
  let authorPhoto =
    "https://img-cdn.thepublive.com/fit-in/580x326/filters:format(webp)/sanjeev-kapoor/media/agency_attachments/hXHLLj4g5NAUwsM9IKj5.png";
  let authorName = "Sanjeev Kapoor";
  return (
    <div className={styles.recipeAuthorBlock}>
      <img
        src={authorPhoto}
        alt="Khana Khajana"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink} target="blank" className={styles.authorLink}>
          Khana Khajana
        </a>
      </div>
    </div>
  );
}

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Creole Mushroom Rice</h1>
          <p>
            Rice cooked with mushrooms and some other ingredients in the Creole
            style. This is a Sanjeev Kapoor exclusive recipe.
          </p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;
