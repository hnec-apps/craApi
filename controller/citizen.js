var models = require("../modules");
exports.citizen_mgr = {
  get_citizens : async () =>{
    try{
      return await  models.Citizen.findAndCountAll({
        where: {
          status: 1
        }
      });
    }catch(err){
      return(err);
    }
  },

  get_citizen : async id=>{

    try {
      return await models.Citizen.findOne({
      where: {
        status: 1,
        id:id
      }
    });
    } catch (err) {
     return(err);
    }
  },
  add_citizen : async body =>{
    try {
      return await models.Citizen.create(body);
    } catch (err) {
      console.log(err)
     return(err);
    }
    
  },
  
};



