var models = require("../modules");
exports.citizen_mgr = {
  get_citizens: async () => {
    try {
      return await models.Citizen.findAndCountAll({
        where: {
          status: 1
        }
      });
    } catch (err) {
      return (err);
    }
  },

  get_citizen: async nid => {

    try {
      return await models.Citizen.findOne({
        where: {
          national_id: nid
        }
      });
    } catch (err) {
      return (err);
    }
  },
  get_citizen_P: async pid => {
    try {
      return await models.Citizen.findOne({
        where: {
          person_id: pid
        }
      });
    } catch (err) {
      return (err);
    }
  },
  add_citizen: async body => {
    try {
      let citizen = await models.Citizen.findOne({
        where: {
          person_id: body.person_id
        }
      });
      console.log("im hh");
      if (citizen) {
        console.log(" im in add", citizen);
        let tempcitizen = {
          person_id: citizen.person_id,
          national_id: citizen.national_id,
          first_name: citizen.first_name,
          father_name: citizen.father_name,
          grand_name: citizen.grand_name,
          family_name: citizen.family_name,
          mother_name: citizen.mother_name,
          birth_date: citizen.birth_date,
          gender: citizen.gender,
          is_alive: citizen.is_alive,
          registry_number: citizen.registry_number,
          deleted: citizen.deleted

        }
        await models.tempCitizen.create(tempcitizen);
        await models.Citizen.destroy({
          where: {
            person_id: body.person_id
          }
        });
        return await models.Citizen.create(tempcitizen);
      } else {
        return await models.Citizen.create(tempcitizen);
      }

    } catch (err) {
      return (err);
    }

  },

};