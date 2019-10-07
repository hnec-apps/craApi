var models = require("../modules");
var log = require("./log").log_mgr
exports.citizen_mgr = {
  get_citizens: async () => {
    try {
      return await models.Citizen.findAndCountAll({
        where: {
          deleted: 0
        }
      });
    } catch (err) {
      log.add_log(log.add_log(JSON.stringify({national_id: nid}),JSON.stringify(err)),JSON.stringify(err))
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
      log.add_log(JSON.stringify({national_id: nid}),JSON.stringify(err))
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
     
      log.add_log(JSON.stringify({person_id: pid}),JSON.stringify(err))
      return (err);
    }
  },
  add_citizen: async body => {
    try {
      return await models.Citizen.create(body);

    } catch (err) {

      log.add_log(JSON.stringify(body),JSON.stringify(err))
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
      log.add_log(JSON.stringify({person_id: body.person_id}),JSON.stringify(err))
      return (err);
    }


  },
};