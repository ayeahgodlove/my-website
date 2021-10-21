import { IToken } from "../../models/token/token.model";

export enum tokenActionTypes {
  TOKEN_FETCH_REQUEST = "TOKEN_FETCH_REQUEST",
  TOKEN_FETCH_SUCCESS = "TOKEN_FETCH_SUCCESS",
  TOKEN_FETCH_ERROR = "TOKEN_FETCH_ERROR",
}

interface FetchTokenRequestAction {
  type: typeof tokenActionTypes.TOKEN_FETCH_REQUEST;
}

interface FetchTokenSuccessAction {
  type: typeof tokenActionTypes.TOKEN_FETCH_SUCCESS;
  payload: IToken;
}

interface FetchTokenFailureAction {
  type: typeof tokenActionTypes.TOKEN_FETCH_ERROR;
  payload: string;
}

export type tokenActionsCreators =
  | FetchTokenRequestAction
  | FetchTokenSuccessAction
  | FetchTokenFailureAction;
