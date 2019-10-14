import axios from "axios";
// npm install --save axios
export default {


    sayHello() {
        alert("hello");
    },




    // ============== Login Page ===================================================
    Login(Username, Password) {
        alert(Username);
        alert(Password);
        var url = "http://localhost/AskApi/Login.php?email=" + Username + "&pass=" + Password;
        axios.get(url).then(res => {
                console.log(res.data);
                return res.data;
            })
    },

    // ============== Home  Page ===================================================
    // ============== PersonID Page ================================================




    // ====== Log Out========
    Logout() {
        alert("You will Loging Out");
    },



    // ====== Get Data By NID ========
    GetByNid(nid) {
        alert("You will Get By NID");
        axios
            .get("http://localhost/BlogApi/Post.php?id=" + nid)
            .then(res => {
                console.log(res.data);
                return res.data;
            })
    }

}