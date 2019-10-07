var models = require("../modules");
exports.log_mgr = {

   add_log: async(request, response) => {
     
    await models.Log.create({requast:request,response:response})
     
  }

}