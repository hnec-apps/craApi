// @ is an alias to /src

import DataServices from "@/Model/DataServices.js";

export default {
  name: "home",
  data: function() {
    return {
      Logid: this.$parent.Logid,
      username: null,
      password: null,
      eror:null,
      worng:false
    };
  },
  methods: {
    Login: function() {
      const check= DataServices.Login(this.username, this.password);
      if(check.user==true){
        this.$parent.Logid=true;
        this.Logid=true;
        localStorage.Logid=true;
        localStorage.key=check.key;
        this.$router.push('/') 
      }else{
        this.wrong=true;
        this.eror=check.eror;
      }
    },
    Logout: function() {
      DataServices.Logout();
      this.$parent.Logid=false;
      this.$router.push('/'); 
    }
  },
  created: function(){
    if(localStorage.Logid=="true")
    this.$router.push('/') 
  }
};
