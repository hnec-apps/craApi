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
      return await models.Citizen.create(body);

    } catch (err) {
      return (err);
    }

  },
  delete_citizen: async body => {
    try {
      return await models.Citizen.destroy({
        where: {
          person_id: body.person_id
        }
      });

    } catch (err) {
      return (err);
    }


  },
};