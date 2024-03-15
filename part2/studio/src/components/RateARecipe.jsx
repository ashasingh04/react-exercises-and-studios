let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  function GiveRating() {
    return <h3>{stars[props.rating - 1]}</h3>;
  }

  let result = props.rating > 0 && props.rating < 6 ? <GiveRating /> : null;
  return result;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js
