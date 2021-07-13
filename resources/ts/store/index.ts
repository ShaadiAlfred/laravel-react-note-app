import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from "./Auth";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    devTools: (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
