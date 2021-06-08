import { createStore, Store } from 'vuex';
import auth from './modules/auth';
import { RootState } from "../types";
import { InjectionKey } from "vue";

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store: Store<RootState> = createStore<RootState>({
    modules: {
        auth,
    }
});
