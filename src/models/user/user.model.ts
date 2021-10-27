import { UpdateMode } from "../common/update-mode.enum";

export interface IUser {
  code: string;
  usrName: string;
  roles?: string;
}

export interface IUserState {
  readonly isLoading: boolean;
  readonly users: IUser[];
  readonly user: IUser;
  readonly errors?: string;
  readonly initialFetch: boolean;
  readonly updateMode: UpdateMode;
}
