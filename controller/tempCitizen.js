var models = require("../modules");
var log = require("./log").log_mgr

exports.temp_mgr = {

  add_temp: async body => {
    try {
      return await models.tempCitizen.create(body);

    } catch (err) {
      log.add_log(JSON.stringify(body), JSON.stringify(err))
      return (err);
    }

  },

};