const state = () => ({
    agents: null
});

const mutations = {
    ["GET_AGENTS"](state) {
        state.showLoader = true;
    },
    ["GET_AGENTS_FAILED"](state) {
        state.showLoader = false;
    },
    ["GET_AGENTS_ERROR"](state) {
        state.showLoader = false;
    },
    ["GET_AGENTS_SUCCESS"](state, payload) {
        state.showLoader = false;
        state.agents = payload;
    },
};

const actions = {
    async _fetchagents({ commit }, requestbody) {
        commit("GET_AGENTS");
        await this.$api
          .$get("/agents", requestbody)
          .then((response) => {
            commit("GET_AGENTS_SUCCESS", response);
          })
          .catch((error) => {
            console.log(error);
            commit("GET_AGENTS_ERROR");
          });
      },
};

const getters = {
    agents:(state)=>{
        return state.agents;
    }
};

export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters,
};
