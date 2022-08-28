const state = () => ({
    customers: null
});

const mutations = {
    ["GET_CUSTOMERS"](state) {
        state.showLoader = true;
    },
    ["GET_CUSTOMERS_FAILED"](state) {
        state.showLoader = false;
    },
    ["GET_CUSTOMERS_ERROR"](state) {
        state.showLoader = false;
    },
    ["GET_CUSTOMERS_SUCCESS"](state, payload) {
        state.showLoader = false;
        state.customers = payload;
    },
};

const actions = {
    async _fetchcustomers({ commit }) {
        commit("GET_CUSTOMERS");
        await this.$api
          .$get("/customers")
          .then((response) => {
            commit("GET_CUSTOMERS_SUCCESS", response);
          })
          .catch((error) => {
            console.log(error);
            commit("GET_CUSTOMERS_ERROR");
          });
      },
      async _updatecustomer({ commit, dispatch }, requestbody) {
        await this.$api
          .$put(`/customers/${requestbody.id}`, requestbody)
          .then((response) => {
            dispatch("_fetchcustomers", null, {root: true})
          })
          .catch((error) => {
            console.log(error);
          });
      },
      async _addcustomer({ commit, dispatch }, requestbody) {
        await this.$api
          .$post("/customers/signup", requestbody)
          .then((response) => {
            dispatch("_fetchcustomers", null, {root: true})
          })
          .catch((error) => {
            console.log(error);
          });
      },
      
};

const getters = {
    customers:(state)=>{
        return state.customers;
    }
};

export default {
    namespaced: false,
    state,
    mutations,
    actions,
    getters,
};
