import Vue from "vue";
import Vuex from "vuex";
import router from "./../router";

Vue.use(Vuex);

import userStore from "@/store/modules/userStore.js";
import bus from "../utils/bus";

export default new Vuex.Store({
  modules: {
    userStore: userStore
  },
  state: {
    userInfo: null,
    allUsers: [
      { id: 1, name: "홍길동", userId: "test1", password: "1234" },
      { id: 2, name: "테스트", userId: "test2", password: "1234" }
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
      alert(state.userInfo.name + "님 환영합니다.");
    },
    loginError(state) {
      state.isLogin = false;
      state.isLoginError = true;
      alert("로그인 실패 \n로그인 정보를 확인해주세요.");
    },
    logout(state) {
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
    }
  },
  actions: {
    login({ state, commit }, loginObj) {
      let selectedUser = null;
      state.allUsers.forEach(user => {
        if (user.userId === loginObj.userId) selectedUser = user;
      });

      if (selectedUser === null || selectedUser.password !== loginObj.password)
        commit("loginError");
      else {
        commit("loginSuccess", selectedUser); //payload로 넘겨줌
        bus.$emit('start:spinner');
        setTimeout(() => router.push({ name: "Main" }), 2000)
      }
    },
    logout({ commit }) {
      commit("logout");
      router.push({ name: "Login" });
    }
  }
});
