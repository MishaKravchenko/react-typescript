import {combineReducers, configureStore} from "@reduxjs/toolkit";
import carReducer from "./slices/car.slice";

const rootReducers = combineReducers({
    car: carReducer
})

export const setupStore = () => configureStore({
    reducer: rootReducers
})

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
