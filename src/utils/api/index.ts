import { LoginData, LoginPayload, Todos } from "../constants";

//Login user
export const loginUser = async (
  loginData: LoginPayload
): Promise<LoginData> => {
  const payload = {
    username: loginData.userName,
    password: loginData.password,
  };
  let data = {} as LoginData;
  await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((result) => (data = result));
  return data;
};

// Add Todo
export const addTodo = async (payload: Todos): Promise<Todos> => {
  let data = {} as Todos;
  await fetch("https://dummyjson.com/todos/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((result) => (data = result));
  return data;
};

//Update Todo
export const editTodo = async (payload: Todos): Promise<Todos> => {
  let data = {} as Todos;
  await fetch(`https://dummyjson.com/todos/1`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((result) => (data = result));
  return data;
};

//Delete Todo
export const deleteTodo = async (): Promise<Todos> => {
  let data = {} as Todos;
  await fetch("https://dummyjson.com/todos/1", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((result) => (data = result));
  return data;
};
