export const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export interface LoginData {
  firstName: string;
  lastName: string;
  username: string;
  gender: string;
  email: string;
  password: string;
  token: string;
  image: string;
  id: number;
  message?: string;
}

export interface LoginPayload {
  userName: string;
  password: string;
}

export interface SnackbarDetails {
  openSnackbar: boolean;
  serverError: boolean;
  errorMessage: string;
}

export interface Snackbar {
  snackbar: SnackbarDetails;
}

export interface HeaderProps {
  data: {
    userName: string;
  };
}

export interface Todos {
  todo: string | undefined;
  completed: boolean;
  userId: number | string;
  id?: number;
}

export interface Props {
  setTodos: any;
  todos: Todos[];
  isEdited?: boolean;
  setIsEdited?: any;
  editedId?: null | string | number;
  setEditedId?: any;
  setInputVal: any;
  inputVal?: string;
}
