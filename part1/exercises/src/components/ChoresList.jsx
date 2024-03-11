import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div>
         <h3 className = {classes.choresHeading}>Today's Chores:</h3>
         <ul>
            <li className={classes.choresText}>Empty dishwasher</li>
            <li className={classes.choresText}>Complete prep work</li>
            <li className={classes.choresText}>Buy groceries</li>
         </ul>
      </div>
   );
}