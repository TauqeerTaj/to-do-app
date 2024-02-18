import { loginData, loginPayload } from "../constants";

export const loginUser = async (
  loginData: loginPayload
): Promise<loginData> => {
  const payload = {
    username: loginData.userName,
    password: loginData.password,
  };
  let data = {} as loginData;
  await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((result) => (data = result));
  return data;
};
