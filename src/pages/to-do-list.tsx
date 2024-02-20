import React, { useState, useEffect } from "react";
import { useRouter, withRouter } from "next/router";
import Box from "@mui/material/Box";
import Header from "@/components/header";
import ToDoInput from "@/components/to-do/input";
import ListTodo from "@/components/to-do/list";
import { Todos } from "@/utils/constants";

function TodoList() {
  const [headerData, setHeaderData] = useState<any>({});
  const [inputVal, setInputVal] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [editedId, setEditedId] = useState(null);

  const router = useRouter();

  useEffect(() => {
    setHeaderData(JSON.parse(router.query.data as string));
  }, []);
  return (
    <>
      <Header data={headerData} />
      <Box
        sx={{
          width: "50%",
          margin: "auto",
          marginTop: 15,
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          ["@media (max-width:767px)"]: { width: "100%" },
        }}
      >
        <ToDoInput
          setTodos={setTodos}
          todos={todos}
          setIsEdited={setIsEdited}
          isEdited={isEdited}
          editedId={editedId}
          setInputVal={setInputVal}
          inputVal={inputVal}
        />
        <ListTodo
          setTodos={setTodos}
          todos={todos}
          setEditedId={setEditedId}
          setIsEdited={setIsEdited}
          setInputVal={setInputVal}
        />
      </Box>
    </>
  );
}
export default withRouter(TodoList);
