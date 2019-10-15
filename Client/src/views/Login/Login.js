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
      DataServices.Login(this.username, this.password);
    },
    Logout: function() {
      alert("Log Out");
    }
  }
};
