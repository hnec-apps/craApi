import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import PersonID from "./views/PersonID.vue";
import Log from "./views/Log.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/PersonID",
      name: "Person ID",
      component: PersonID
    },
    {
      path: "/Log",
      name: "Log",
      component: Log
    },
    {
      path: "/Login",
      name: "Login Page",
      component: Login
    },
  ]
});
