import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { Props } from "@/utils/constants";
import { addTodo, editTodo } from "@/utils/api";

export default function ToDoInput(props: Props) {
  const [loading, setLoading] = useState(false);

  const {
    todos,
    setTodos,
    isEdited,
    setIsEdited,
    inputVal,
    setInputVal,
    editedId,
  } = props;

  const onChange = (e: any): void => {
    setInputVal(e.target.value);
  };

  const handleClick = async () => {
    const payload = {
      todo: inputVal,
      completed: true,
      userId: 1,
    };
    if (!isEdited) {
      setLoading(true);
      const response = await addTodo(payload);
      setTodos([...todos, { ...response, id: new Date().getTime() }]);
      setLoading(false);
    } else {
      setLoading(true);
      const response = await editTodo(payload);
      setTodos([...todos, { ...response, id: editedId }]);
      setLoading(false);
    }
    setInputVal("");
    setIsEdited(false);
  };

  return (
    <div>
      {loading && <LinearProgress />}
      <TextField
        variant="outlined"
        onChange={onChange}
        label="Enter Text"
        value={inputVal}
        className="input"
        sx={{ width: "80%" }}
      />
      <Button
        size="large"
        variant={isEdited ? "outlined" : "contained"}
        color="primary"
        sx={{ height: 55 }}
        onClick={handleClick}
        className="addButton"
        disabled={inputVal ? false : true}
        style={{ width: "20%" }}
      >
        {isEdited ? "Edit" : "Add"}
      </Button>
    </div>
  );
}
