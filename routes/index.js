const delay = require('delay');
const axios = require('axios');
const request = require('request-promise');
const citizen_mgr = require('../controller/citizen').citizen_mgr;
const url = 'http://localhost:6000';
module.exports = app => {
  
async function doRequest(personalId) {
    var urlupdate = url+'/?PersonID='+personalId;
    const opstion ={
            url : url,
            headers : {
                // "Authorization" : auth
            },
            data:personalId
    };
    
     let body = await request(opstion);
     if(body) {
        console.log("body",JSON.parse(body))
        return JSON.parse(body);
      } else {
        console.log("err",error)
        return(null);
      }
}
app.get('/', async (req, res) => {
    const personId = req.query.PersonID;
    try{
      let result = await doRequest(personId);
      res.send(result);
      try{
        // check the result
        await citizen_mgr.add_citizen(result);
      }catch(err){
        // into log
        console.log('im in err cit',err)
      }
    }catch(err){
      // into log
      console.log("err",err);
    }
  });
}