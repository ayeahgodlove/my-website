import { Reducer } from "redux";
import { tokenActionTypes, tokenActionsCreators } from "./token.types";
import { ITokenState } from "../../models/token/token.model";

export const INITIAL_STATE: ITokenState = {
  errors: undefined,
  token: { access_token: "" },
  isLoading: false,
  initialFetch: true,
};

const reducer: Reducer<ITokenState> = (
  state = INITIAL_STATE,
  action: tokenActionsCreators
): ITokenState => {
  switch (action.type) {
    case tokenActionTypes.TOKEN_FETCH_REQUEST: {
      return { ...state, isLoading: true };
    }
    case tokenActionTypes.TOKEN_FETCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        initialFetch: false,
        token: action.payload,
      };
    }
    case tokenActionTypes.TOKEN_FETCH_ERROR: {
      return {
        ...state,
        isLoading: false,
        errors: action.payload,
      };
    }
    default:
      return state;
  }
};

export { reducer as tokenReducer };
