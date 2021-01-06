import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: false,
    email: 'o@gmail.com',
    password: '123456'
  },
  getters: {

    get_loggedIn(state) {
      return state.loggedIn;
    },
    get_email(state) {
      return state.email;
    },
    get_password(state) {
      return state.password;
    }
    
  },
  mutations: {
    
    checkUser(state, object) {
      if(object.email == state.email && object.password == state.password) {
        state.loggedIn = true;
        localStorage.islogged = true;
        router.push('/dashboard');
        return true;
      }
    },

    logout(state) {
      console.log(localStorage.islogged);
      if(localStorage.islogged == 'true') {
        state.loggedIn = false;
        localStorage.islogged = false;
        router.push('/login')
      }
    }

    
  },
  actions: {
   
  },
  modules: {}
});
