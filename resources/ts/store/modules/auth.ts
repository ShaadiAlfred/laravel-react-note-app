import { Module } from "vuex";
import { RootState, User } from "../../types";
import axios from "../../services/axios";
import { AxiosResponse } from "axios";
import { defineAsyncComponent } from "vue";

interface State {
    user: User | null;
    test: string;
}

const auth: Module<State, RootState> = {
    state: () => ({
        user: null,
        test: "test",
    }),
    mutations: {
        SET_USER (state, user) {
            state.user = user;
        }
    },
    actions: {
        login ({ state, commit }) {
            axios.get("/sanctum/csrf-cookie").then(response => {
                axios.post("/login", {
                    email: "admin@admin.com",
                    password: "password"
                }).then((result: AxiosResponse<User>) => {
                    console.log(result.data)
                    commit('SET_USER', {
                        user: result.data
                    });
                });
            });
        }
    },
    getters: {
        test: (state: State) => {
            return state.test;
        }
    },
};

export default auth;
