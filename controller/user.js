var models = require("../modules");
exports.user_mgr = {
  get_users : async () =>{
    try{
      return await  models.User.findAndCountAll({
        where: {
          status: 1
        }
      });
    }catch(err){
      return(err);
    }
  },

  get_user : async id=>{

    try {
      return await models.User.findOne({
      where: {
        status: 1,
        id:id
      }
    });
    } catch (err) {
     return(err);
    }
  },
  add_user: async body =>{
    try {
      return await models.User.create(body);
    } catch (err) {
     return(err);
    }
    
  },
  
};



