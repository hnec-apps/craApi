import axios from "axios";
import { userInfo } from "os";
// npm install --save axios
const url = "http://localhost:5000";
export default {
  sayHello() {
    alert("hello");
  },

  // ============== Login Page ===================================================
  Login(Username, Password) {
    alert(Username);
    alert(Password);
    if(Username=="hnec" && Password=="123"){
      return {
        user: true,
        key: 'j23lk2'
      };
    }else{
      return {
        user: false,
        eror: 'the user name or password is not true'
      };
    }
  },

  // ============== Home  Page ===================================================
  // ============== PersonID Page ================================================
  async GetByPersonId(pid) {
    try {
      const res = await axios.get(url + "/getcitizen?PersonID=" + pid);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(" im in err", err);
      return err;
    }
  },

  // ====== Log Out========
  Logout() {
    alert("You will Loging Out");
    localStorage.Logid=false;
    localStorage.key=null;
    this.Logid=false
  },

  // ====== Get Data By NID ========
  GetByNid(nid) {
    // alert("You will Get By NID");
    axios.get("/getcitizen?PersonID=" + nid).then(res => {
      return res.data;
    });
  }
};
