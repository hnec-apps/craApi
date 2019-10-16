// @ is an alias to /src
import DataServices from "@/Model/DataServices";

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
    Search: async function() {
      const response = await DataServices.GetByPersonId(this.PersonID);
      this.Person.FirstName = response.first_name;
      this.Person.SecondName = response.father_name;
      this.Person.ThirdName = response.grand_name;
      this.Person.LastName = response.family_name;
      this.Person.Gender = response.gender;
      this.Person.FamilyNumber = response.registry_number;
      this.Person.PhoneNumber = "0910000000";
      this.Person.CrsLocation = "طرابلس المركز";
      this.Person.IDnumber = response.national_id;
      this.Person.BirthDate = response.birth_date;
      this.ShowData = true;
    }
  }
};
