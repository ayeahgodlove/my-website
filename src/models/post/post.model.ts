import { UpdateMode } from "../common/update-mode.enum";

export interface IPost {
  title: string;
  description: Object;
  createdAt: Date;
  image: Object;
}

export const emptyPost: IPost = {
  title: "",
  description: {},
  createdAt: new Date(),
  image: {},
};

export interface IPostState {
  readonly isLoading: boolean;
  readonly posts: IPost[];
  readonly post: IPost;
  readonly errors?: string;
  readonly initialFetch: boolean;
  readonly updateMode: UpdateMode;
}
