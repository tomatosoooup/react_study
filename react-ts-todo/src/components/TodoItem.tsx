import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  onDelete: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onDelete}>
      {props.text}
    </li>
  );
};

export default TodoItem;
