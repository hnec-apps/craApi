import DataServices from "@/Model/DataServices.js";

export default {
  name: "home",
  data: function() {
    return {
      Logid:true,
    };
  },
    methods: {
    Logout: DataServices.Logout
  }
};