import { createStore, combineReducers } from "redux";
import { messagesReducer } from "./messagesReducer";

const rootReducer = combineReducers({
  allMessages: messagesReducer,
});

export const store = createStore(rootReducer);
