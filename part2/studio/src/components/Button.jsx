import ClickedButton from "./ClickedButton";
import SaveButton  from "./SaveButton";
function Button(props) {
  const saveButton = props.saveButton ? <SaveButton /> : <ClickedButton />;
   return saveButton;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 