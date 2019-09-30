<template>
  <div class="content">
    <!-- IF User -->
    <div v-show="Logid==true">
      <div class="bar">
        <router-link class="active" to="/">الرقم الوطني</router-link>
        <router-link to="/PersonID">رقم المواطن</router-link>
        <router-link to="/Log">سجل الأخطاء</router-link>
      </div>

      <div class="search-box">
        <div class="line">
          <div class="label">الرقم الوطني</div>
          <input v-model="PersonID" />
        </div>
        <div class="line">
          <button class="load" @click="Search()">تحميل</button>
        </div>
      </div>

      <div class="pserson-data" v-show="ShowData==true">
        <div class="item-part">
          <div class="label">الإسم الأول</div>
          <div class="full">{{this.Person.FirstName}}</div>
        </div>
        <div class="item-part">
          <div class="label">إسم الأب</div>
          <div class="full">{{this.Person.SecondName}}</div>
        </div>
        <div class="item-part">
          <div class="label">إسم الجد</div>
          <div class="full">{{this.Person.ThirdName}}</div>
        </div>
        <div class="item-part">
          <div class="label">إسم العائلة</div>
          <div class="full">{{this.Person.LastName}}</div>
        </div>

        <div class="item-half">
          <div class="label">الجنس</div>
          <div class="full">{{this.Person.Gender}}</div>
        </div>

        <div class="item-half">
          <div class="label">رقم ورقة العائلة</div>
          <div class="full">{{this.Person.FamilyNumber}}</div>
        </div>

        <div class="item">
          <div class="label">رقم الهاتف</div>
          <div class="full">{{this.Person.PhoneNumber}}</div>
        </div>

        <div class="item">
          <div class="label">رقم المواطن</div>
          <div class="full">{{this.Person.IDnumber}}</div>
        </div>

        <div class="item-half">
          <div class="label">تاريخ الميلاد</div>
          <div class="full">{{this.Person.BirthDate}}</div>
        </div>

        <div class="item-half">
          <div class="label">السجل المدني التابع له</div>
          <div class="full">{{this.Person.CrsLocation}}</div>
        </div>

        <button class="update">تحديث</button>
      </div>
    </div>
    <!-- End If User -->

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
import HelloWorld from "@/components/HelloWorld.vue";

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
}

.pserson-data {
  float: right;
  width: calc(100% - 40px);
  margin: 0px 20px;
  margin-top: 30px;
  .item {
    float: right;
    width: 100%;
    margin-bottom: 30px;
    .label {
      float: right;
      color: #777;
      font-size: 16px;
      margin-left: 5px;
      line-height: 20px;
      margin-right: -4px;
    }
    .full {
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
      height: 44px;
    }
  }
  .item-half {
    float: right;
    width: 50%;
    margin-bottom: 30px;
    .label {
      float: right;
      color: #777;
      font-size: 16px;
      margin-left: 5px;
      line-height: 20px;
      margin-right: -4px;
    }
    .full {
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
      height: 44px;
    }
  }
  .item-part {
    float: right;
    width: 25%;
    margin-bottom: 30px;
    .label {
      float: right;
      color: #777;
      font-size: 16px;
      margin-left: 5px;
      line-height: 20px;
      margin-right: -4px;
    }
    .full {
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
      height: 44px;
    }
  }
  .update {
    float: right;
    background: #e74c3c;
    border: none;
    color: #fff;
    font-family: "cairo";
    width: 160px;
    line-height: 44px;
    font-size: 17px;
    border-radius: 3px;
    margin: 0px calc(50% - 80px);
    margin-bottom: 60px;
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