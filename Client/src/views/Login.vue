<template>
  <div class="content">
    <div class="Login-Box" v-show="Logid==false">
      <div class="Title">تسجيل الدخول</div>
      <div class="Form">
        <div class="Line">
          <div class="Label">إسم المستخدم</div>
          <input />
        </div>

        <div class="Line">
          <div class="Label">كلمة المرور</div>
          <input />
        </div>

        <div class="Line">
          <button>تسجيل الدخول</button>
        </div>
      </div>
    </div>

    <!-- already User -->
    <div v-show="Logid==true" class="You-User">
      أنت مسجل دخولك مسبقا, لتبديل حسابك قم بتسجيل الخروج
      <a @click="Logout()">تسجيل الخروج</a>
    </div>
    <!-- End already User -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data: function() {
    return {
      Logid: this.$parent.Logid
    };
  },
  methods: {
    Logout: function() {
      alert("Log Out");
    }
  }
};
</script>

<style lang="scss">
.Login-Box {
  float: right;
  width: 100%;
  padding-bottom: 50px;
  .Title {
    float: right;
    width: 100%;
    font-size: 32px;
    height: 90px;
    line-height: 90px;
    border-bottom: 3px solid #e74c3c;
    text-align: center;
    color: #e74c3c;
  }
  .Form {
    float: right;
    height: 500px;
    width: 400px;
    min-height: 400px;
    abackground: #e74c3c;
    margin: 50px calc(50% - 200px);
    .Line {
      float: right;
      width: calc(100% - 8px);
      margin: 0px 4px;
      margin-bottom: 20px;
      .Label {
        float: right;
        color: #777;
        font-size: 16px;
        line-height: 20px;
        margin-right: -4px;
        margin-bottom: 5px;
      }
      input {
        float: right;
        width: calc(100% - 30px);
        font-size: 20px;
        font-family: "cairo";
        line-height: 42px;
        outline: none;
        border-radius: 5px;
        border: 1px solid #eee;
        color: #555;
        padding: 0px 15px;
        text-align: right;
      }
      button {
        float: right;
        background: #e74c3c;
        border: none;
        color: #fff;
        font-family: "cairo";
        width: 160px;
        line-height: 44px;
        font-size: 17px;
        border-radius: 3px;
        margin: 20px calc(50% - 80px);
      }
    }
  }
}

.You-User {
  float: right;
  width: 400px;
  margin: 100px calc(50% - 200px);
  font-size: 28px;
  color: #777;
  height: 400px;
  text-align: center;
  a {
    color: #e74c3c;
    font-weight: bold;
    margin-right: 5px;
  }
}
</style>