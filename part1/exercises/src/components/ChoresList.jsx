import classes from "./ChoresList.module.css";

export default function ChoresList() {
  const chores = [
    "Empty dishwasher",
    "Complete prep work",
    "Buy groceries",
    "Laundry",
  ];
  return (
    <div>
      <h3 className={classes.choresHeading}>Today's Chores:</h3>
      <ul>
        {chores.map((chore, index) => (
          <li key={index} className={classes.choresText}>
            {chore}
          </li>
        ))}
      </ul>
    </div>
  );
}
