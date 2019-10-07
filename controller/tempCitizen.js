var models = require("../modules");
exports.temp_mgr = {

  add_temp: async body => {
    try {
      return await models.tempCitizen.create(body);

    } catch (err) {
      return (err);
    }

  },

};