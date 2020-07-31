import router from "../../router";
import axios from "axios";
import user from "@/api/user";

const userStore = {
  namespaced: true,
  state: {
    userInfo: null,
    allUsers: [
      { id: 1, name: "홍길동", userId: "test1@email.com", password: "1234" },
      { id: 1, name: "테스트", userId: "test2@email.com", password: "1234" }
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
      alert("loginSuccess");
    },
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
      alert("loginError");
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    }
  },
  actions: {
    login({ dispatch }, loginObj) {
      // console.log(loginObj)
      axios
        .post("https://reqres.in/api/login", loginObj)
        .then(res => {
          console.log(res);

          let token = res.data.token;

          localStorage.setItem("access-token", token);
          dispatch("getMemberInfo");
        })
        .catch(error => {
          console.log(error);
          //commit('logout')
          console.log(error);
        });
    },
    logout({ commit }) {
      commit("logout");
      router.push({ name: "Login" });
    },
    getMemberInfo({ commit }) {
      user
        .getUserInfo()
        .then(res => {
          console.log(res);
          let userInfo = {
            id: res.data.data.id,
            name: res.data.data.name
          };
          commit("loginSuccess", userInfo);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  modules: {}
};

export default userStore;
