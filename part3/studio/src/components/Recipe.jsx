import { useState } from "react";
import '../App.css';

const RecipeAuthor = () => {
  let authorLink = "https://www.sanjeevkapoor.com/";
  let authorPhoto =
    "https://img-cdn.thepublive.com/fit-in/580x326/filters:format(webp)/sanjeev-kapoor/media/agency_attachments/hXHLLj4g5NAUwsM9IKj5.png";
  let authorName = "Sanjeev Kapoor";

  return (
    <div>
      <img
        src={authorPhoto}
        alt=""
        style={{ objectFit: "contain", borderRadius: "50%" }}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink} target="blank">Khana Khajana</a>
      </div>
    </div>
  );
};

const RecipeIngredients = () => {
  const ingredients = ["Button mushrooms","Rice","Onion","Green Capsicum","Tomato"];
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
    </div>
  );
};

const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1></h1>
        <p></p>
      </div>
      <div className="recipePhotoBlock">
        <RecipeIngredients />
        <RecipeAuthor />
      </div>
    </div>
  );
};

const RecipePhoto = () => {
  return <img src="https://img-cdn.thepublive.com/fit-in/1280x960/filters:format(webp)/sanjeev-kapoor/media/post_banners/d302426390644b980d31ee3e55fb2dd4750e22549c4c9a021e2e6b9c246dda73.jpg" alt="" className="imageUpdates" />;
};

export default function RecipeDisplay() {
  return (
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div>
        <RecipeDescription />
      </div>
    </div>
  );
}
