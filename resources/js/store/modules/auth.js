const auth = {
    state: () => ({
        user: null,
    }),
    mutations: {
        SET_USER (state, user) {
            state.user = user;
        }
    },
    actions: {
        login ({ state, commit }) {
            commit('SET_USER', {});
        }
    },
    getters: {},
};

export default auth;
