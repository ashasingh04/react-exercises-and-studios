import styles from "./Description.module.css";

export default function RecipePhoto() {
  let recipeUrl =
    "https://img-cdn.thepublive.com/fit-in/1280x960/filters:format(webp)/sanjeev-kapoor/media/post_banners/d302426390644b980d31ee3e55fb2dd4750e22549c4c9a021e2e6b9c246dda73.jpg";
  return (
    <div>
      <img
        src={recipeUrl}
        alt="Mushroom rice"
        className={styles.imageUpdates}
      />
    </div>
  );
}
