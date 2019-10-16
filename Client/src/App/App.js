// eslint-disable-next-line import/no-unresolved
import DataServices from "@/Model/DataServices";

export default {
  name: "home",
  data() {
    return {
      Logid: true
    };
  },
  methods: {
    Logout: DataServices.Logout
  }
};
