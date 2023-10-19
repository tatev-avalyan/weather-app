import { useSelector as useS, useDispatch as useD } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import { weatherReducer } from "./reducers/weatherReducer";

const store = createStore(weatherReducer);

export type RootState = ReturnType<typeof store.getState>;

export const useDispatch: () => typeof store.dispatch = useD;
export const useSelector: TypedUseSelectorHook<RootState> = useS;

export default store;
