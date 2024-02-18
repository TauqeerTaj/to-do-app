export const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export interface loginData {
  firstName: string;
  lastName: string;
  userName: string;
  gender: string;
  email: string;
  password: string;
  token: string;
  image: string;
  id: number;
  message?: string;
}

export interface loginPayload {
  userName: string;
  password: string;
}

export interface snackbarDetails {
  openSnackbar: boolean;
  serverError: boolean;
  errorMessage: string;
}

export interface snackbar {
  snackbar: snackbarDetails;
}
