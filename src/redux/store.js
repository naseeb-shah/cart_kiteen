import { createStore } from "redux";
import { GameReducer } from "./reducers";

 export const store=createStore(GameReducer)