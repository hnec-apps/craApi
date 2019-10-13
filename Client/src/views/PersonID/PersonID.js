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