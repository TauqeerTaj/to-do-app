import React, { useState } from "react";
import { Button, Typography, List, ListItem } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { makeStyles } from "@material-ui/styles";
import { Props, Todos } from "@/utils/constants";
import { deleteTodo } from "@/utils/api";

const useStyles: any = makeStyles({
  list: {
    margin: 0,
    display: "flex",
    justifyContent: "space-around",
    border: "1px solid light-gray",
  },
  text: {
    width: "70%",
  },
  listButtons: {
    marginLeft: 10,
  },
});

export default function ListTodo(props: Props) {
  const [loading, setLoading] = useState(false);

  const { todos, setTodos, setEditedId, setInputVal, setIsEdited } = props;

  const classes = useStyles();

  const onDelete = async (id: undefined | number) => {
    setLoading(true);
    await deleteTodo();
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setLoading(false);
  };

  const handleEdit = async (id: number | undefined) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    const editVal = todos.find((todo) => todo.id === id);
    setEditedId(editVal?.id);
    setInputVal(editVal?.todo);
    setTodos(newTodos);
    setIsEdited(true);
  };

  return (
    <div>
      {loading && <LinearProgress />}
      <List>
        {todos.map((todo: Todos) => {
          return (
            <>
              <ListItem divider className={classes.list}>
                <Typography
                  className={classes.text}
                  style={{ color: todo.completed ? "green" : "" }}
                  key={todo.id}
                >
                  {todo.todo}
                </Typography>
                <Button
                  onClick={() => handleEdit(todo.id)}
                  variant="contained"
                  className={classes.listButtons}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => onDelete(todo.id)}
                  color="secondary"
                  variant="contained"
                  className={classes.listButtons}
                >
                  delete
                </Button>
              </ListItem>
            </>
          );
        })}
      </List>
    </div>
  );
}
