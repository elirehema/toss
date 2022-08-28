const state = () => ({
  showLoader: Boolean,
  profile: {},
  client: {},
  tenant: "",
});

const mutations = {
  ["AUTHENTICATE"](state) {
    state.showLoader = true;
  },
  ["AUTHENTICATE_FAILED"](state) {
    state.showLoader = false;
  },
  ["AUTHENTICATE_ERROR"](state) {
    state.showLoader = false;
  },
  ["AUTHENTICATE_SUCCESS"](state, payload) {
    state.showLoader = false;
    state.profile = payload;
    window.localStorage.setItem("accessToken",payload.accessToken);
    this.$router.push("/");
  },

  
};
const actions = {
  async _authenticate({ commit }, requestbody) {
    commit("AUTHENTICATE");
    await this.$api
      .$post("/users/signin", requestbody)
      .then((response) => {
        commit("AUTHENTICATE_SUCCESS", response);
        
      })
      .catch((error) => {
        console.log(error);
        commit("AUTHENTICATE_ERROR");
      });
  },


  async _logoutsession({ commit }) {
    //window.localStorage.clear();
    window.localStorage.removeItem("vuex");
    //window.localStorage.removeItem("accessToken");
    sessionStorage.clear();
    this.$router.push("/signin");
  },
};
const getters = {
  accessToken: function (state) {
    return window.localStorage.getItem("accessToken");
  },
  clientId: function (state) {
    return state.client.id;
  },
  client: function (state) {
    return state.client;
  },
  profile: function (state) {
    return state.profile;
  },
  isAuthenticated: function (state) {
    return window.localStorage.getItem("accessToken") == null ? false : true;
  },
  tenant: function (state) {
    var _tenant = state.tenant;
    console.log("STATE TENANT: " + _tenant);
    return _tenant == null ? "demo" : _tenant;
  },

};

export default {
  namespaced: false,
  state,
  mutations,
  actions,
  getters,
};
