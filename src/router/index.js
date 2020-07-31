import Vue from "vue";
import VueRouter from "vue-router";
import store from "./../store";

Vue.use(VueRouter);

//guard
const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    alert("이미 로그인 되었습니다.");
    next("Main");
  } else {
    next();
  }
};

const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    alert("로그인이 필요한 기능입니다.");
    next("/");
  } else {
    next();
  }
};

const Login = () =>
  import(/* webpackChunkName: "login" */ "../views/Login.vue");
const CheckIn = () =>
  import(/* webpackChunkName: "checkIn" */ "../views/CheckIn.vue");
const Main = () =>
  import(/* webpackChunkName: "checkIn" */ "../views/Main.vue");

const routes = [
  {
    path: "/",
    name: "Login",
    beforeEnter: rejectAuthUser,
    component: Login
  },
  {
    path: "/checkIn",
    name: "CheckIn",
    component: CheckIn,
    beforeEnter: onlyAuthUser,
    children: []
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    beforeEnter: onlyAuthUser,
    children: []
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
