<template>
  <div class="content">
    <div v-show="Logid==true">
      <div class="bar">
        <router-link to="/">الرقم الوطني</router-link>
        <router-link to="/PersonID">رقم المواطن</router-link>
        <router-link class="active" to="/Log">سجل الأخطاء</router-link>
      </div>

      <div class="search-box">
        <div class="line-half">
          <div class="label">تاريخ البدء</div>
          <input />
        </div>
        <div class="line-half">
          <div class="label">تاريخ الإنتهاء</div>
          <input />
        </div>
        <div class="line">
          <button class="load" @click="Search()">تحميل</button>
        </div>
      </div>

      <div class="data-result">
        <div class="head-result">
          <div class="title">التاريخ</div>
          <div class="title">مكان الخطأ</div>
          <div class="title-eror">رسالة الخطأ</div>
        </div>
        <!--  -->
        <div class="normal-result">
          <div class="info">2-10-2019</div>
          <div class="info">رقم المواطن</div>
          <div class="info-eror">السجل المدني</div>
        </div>

        <div class="normal-result2">
          <div class="info">3-10-2019</div>
          <div class="info">الرقم الوطني</div>
          <div class="info-eror">السجل المدني</div>
        </div>

        <div class="normal-result">
          <div class="info">الإسم</div>
          <div class="info">اللقب</div>
          <div class="info-eror">السجل المدني</div>
        </div>

        <div class="normal-result2">
          <div class="info">الإسم</div>
          <div class="info">اللقب</div>
          <div class="info-eror">This is Example For Eror One</div>
        </div>

        <div class="normal-result">
          <div class="info">الإسم</div>
          <div class="info">اللقب</div>
          <div class="info-eror">السجل المدني</div>
        </div>

        <div class="normal-result2">
          <div class="info">الإسم</div>
          <div class="info">اللقب</div>
          <div class="info-eror">السجل المدني</div>
        </div>

        <!--  -->
      </div>
    </div>


    <!-- IF Not User -->
    <div v-show="Logid==false" class="Not-User">
      الرجاء القيام بتسجيل الدخول حتى تعرض لك هذه الصفحة
              <router-link to="/Login">تسجيل الدخول</router-link>

    </div>
    <!-- End IF Not User -->

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data: function() {
    return {
      Logid: this.$parent.Logid,
      PersonID: null,
      Person: {},
      ShowData: false
    };
  },
  methods: {
    Search: function() {
      this.Person.FirstName = "عبدالسميع";
      this.Person.SecondName = "محمود";
      this.Person.ThirdName = "نوري";
      this.Person.LastName = "العاشق";
      this.Person.Gender = "ذكر";
      this.Person.FamilyNumber = "23472";
      this.Person.PhoneNumber = "0910000000";
      this.Person.IDnumber = "119930000000000";
      this.Person.BirthDate = "26-4-1900";
      this.Person.CrsLocation = "طرابلس المركز";
      this.ShowData = true;
    }
  }
};
</script>

<style lang="scss">
.bar {
  float: right;
  width: 100%;
  border-bottom: 3px solid #e74c3c;
  margin-top: 30px;
  a {
    float: right;
    width: calc(100% / 3);
    text-align: center;
    line-height: 40px;
    font-size: 20px;
    color: #777;
    text-decoration: none;
    margin-bottom: 10px;
  }
  a.active {
    color: #e74c3c;
  }
}

.search-box {
  float: right;
  width: calc(100% - 40px);
  margin: 40px 20px;
  border-bottom: 1px solid #efefef;
  .line {
    float: right;
    width: 100%;
    margin-top: 20px;
    .label {
      float: right;
      color: #777;
      font-size: 16px;
      margin-left: 5px;
      line-height: 20px;
      margin-right: -4px;
    }
    input {
      float: right;
      width: calc(100% - 40px);
      margin: 0px;
      margin-top: 8px;
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
    .load {
      float: right;
      background: #555;
      border: none;
      color: #fff;
      font-family: "cairo";
      width: 160px;
      line-height: 44px;
      font-size: 17px;
      border-radius: 3px;
      margin: 0px calc(50% - 80px);
      margin-bottom: 60px;
      margin-top: 30px;
    }
  }
  .line-half {
    float: right;
    width: 50%;
    margin-top: 20px;
    .label {
      float: right;
      color: #777;
      font-size: 16px;
      margin-left: 5px;
      line-height: 20px;
      margin-right: -4px;
    }
    input {
      float: right;
      width: calc(100% - 40px);
      margin: 0px;
      margin-top: 8px;
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
  }
}

.data-result {
  float: right;
  width: calc(100% - 40px);
  margin: 0px 20px;
  .head-result {
    float: right;
    width: 100%;
    height: 46px;
    line-height: 46px;
    border-bottom: 1px solid #eee;
    .title {
      float: right;
      width: calc(100% / 6);
      text-align: center;
      color: #555;
      font-weight: bold;
      font-size: 17px;
    }
    .title-eror {
      float: right;
      width: calc(100% / 1.5);
      text-align: center;
      color: #555;
      font-weight: bold;
      font-size: 17px;
    }
  }
  .normal-result {
    float: right;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #efefef;
    border-bottom: 1px solid #eee;
    .info {
      float: right;
      width: calc(100% / 6);
      text-align: center;
      color: #555;
      font-size: 15px;
    }
    .info-eror {
      float: right;
      width: calc(100% / 1.5);
      text-align: center;
      color: #555;
      font-size: 15px;
    }
  }

  .normal-result2 {
    float: right;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    .info {
      float: right;
      width: calc(100% / 6);
      text-align: center;
      color: #555;
      font-size: 15px;
    }
    .info-eror {
      float: right;
      width: calc(100% / 1.5);
      text-align: center;
      color: #555;
      font-size: 15px;
    }
  }
}

.Not-User{
  float: right;
  width: 400px;
  margin: 100px calc(50% - 200px);
  font-size: 28px;
  color: #777;
  height: 400px;
  text-align: center;
  a{
    color: #e74c3c;
    font-weight: bold;
    margin-right: 5px;
  }
}

</style>