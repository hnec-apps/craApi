// @ is an alias to /src

import DataServices from "@/Model/DataServices.js";

export default {
  name: "home",
  data: function() {
    return {
      Logid: this.$parent.Logid,
      username: null,
      password: null
    };
  },
  methods: {
    Login: function() {
      const check= DataServices.Login(this.username, this.password);
      if(check.user==true){
        this.$parent.Logid=true;
        this.Logid=true;
        localStorage.Logid=true;
        alert(check.key);
        localStorage.key=check.key;
      }else{
        alert(check.eror);
      }
    },
    Logout: function() {
      DataServices.Logout();
      this.$parent.Logid=false;
    }
  }
};
