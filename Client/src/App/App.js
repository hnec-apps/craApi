// eslint-disable-next-line import/no-unresolved
import DataServices from "@/Model/DataServices";

export default {
  name: "home",
  data() {
    return {
      Logid: null
    };
  },
  methods: {
    Logout: DataServices.Logout
  },
  created: function(){
    if(localStorage.Logid=="true")
    this.Logid=true;
    else
    this.Logid=false;
  }
};
