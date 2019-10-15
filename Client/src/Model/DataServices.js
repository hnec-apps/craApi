import axios from "axios";
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
    var url =
      "http://localhost/AskApi/Login.php?email=" +
      Username +
      "&pass=" +
      Password;
    axios.get(url).then(res => {
      console.log(res.data);
      return res.data;
    });
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
  },

  // ====== Get Data By NID ========
  GetByNid(nid) {
    // alert("You will Get By NID");
    axios.get("/getcitizen?PersonID=" + nid).then(res => {
      return res.data;
    });
  }
};
