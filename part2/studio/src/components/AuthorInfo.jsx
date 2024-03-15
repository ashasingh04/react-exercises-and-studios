import "./styling.css";
import recipeData from "./recipe.json";

function AuthorInfo({ data }) {
  return (
    <div>
      <h4>Author: {data.author}</h4>
      <img src={data.authorImage} alt={data.author} className="authorImage" />
      <br />
      <a href={data.website} target="blank">
        {data.name}
      </a>
    </div>
  );
}

export default AuthorInfo;

//import styles.css
//import json file for author info
//image, name, website
//css for styling image
