const delay = require('delay');
const axios = require('axios');
const request = require('request-promise');
const citizen_mgr = require('../controller/citizen').citizen_mgr;
const url = 'http://localhost:6000';
module.exports = app => {
async function doRequest(personalId) {
  console.log(url)
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
    console.log("req ",req.query.PersonID);
    const personId = req.query.PersonID;
    try{
      let result = await doRequest(personId);
      res.send(result);
      try{
        console.log("am h");
        await citizen_mgr.add_citizen(result);
      }catch(err){
        console.log('im in err cit',err)
      }
    }catch(err){
      console.log("err",err);
    }
  });
}