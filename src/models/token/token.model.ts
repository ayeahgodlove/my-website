export interface IToken {
  access_token: string;
}

export interface ITokenState {
  readonly isLoading: boolean;
  readonly token: IToken;
  readonly errors?: string;
  readonly initialFetch: boolean;
}
