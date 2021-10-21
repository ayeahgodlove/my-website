import { action } from "typesafe-actions";
import { tokenActionsCreators, tokenActionTypes } from "./token.types";
import { IToken } from "../../models/token/token.model";

export const fetchTokensRequest = (): tokenActionsCreators => {
  return action(tokenActionTypes.TOKEN_FETCH_REQUEST);
};

export const fetchTokensSuccess = (token: IToken): tokenActionsCreators =>
  action(tokenActionTypes.TOKEN_FETCH_SUCCESS, token);

export const fetchTokensError = (message: string): tokenActionsCreators =>
  action(tokenActionTypes.TOKEN_FETCH_ERROR, message);
