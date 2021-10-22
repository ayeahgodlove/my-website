import { Action, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { ThunkAction } from "redux-thunk";
import storageSession from "redux-persist/lib/storage/session";
import { tokenReducer } from "./token/token.reducer";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["user", "token"],
};

export const rootReducer = combineReducers({
  token: tokenReducer,
});

export default persistReducer<rootState>(persistConfig, rootReducer);

export type rootState = ReturnType<typeof rootReducer>;

export type appThunk = ThunkAction<void, rootState, unknown, Action<string>>;
