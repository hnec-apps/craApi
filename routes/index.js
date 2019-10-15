const delay = require('delay'); //This For delay the execution if we need to
const axios = require('axios'); //This replace if the request library does not work properly
const request = require('request-promise');
const citizen_mgr = require('../controller/citizen').citizen_mgr;
const temp_mgr = require('../controller/tempCitizen').temp_mgr;
const url = 'http://localhost:5000/getcitizen';
const express = require('express');
const router = express.Router();
const login = require('../services/passport')(router);
const log = require("../controller/log").log_mgr


async function doRequest(personalId) {
  var urlupdate = url + '/?PersonID=' + personalId;
  const opstion = {
    url: urlupdate,
    headers: {
      // "Authorization" : auth
    },
    data: personalId
  };


  let body = await request(opstion);
  if (body) {
    return JSON.parse(body);
  } else {
    return (null);
  }
}

router.get('/', async (req, res) => {
  const personId = req.query.PersonID;
  if (personId) {
    try {
      let result = await doRequest(personId);
      res.send(result);
      if (result.person_id) {
        try {
          // check the result
          let citizen = await citizen_mgr.get_citizen_P(result.person_id);
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

          if (citizen) {

            await temp_mgr.add_temp(tempcitizen);
            await citizen_mgr.delete_citizen(tempcitizen);

          }

          await citizen_mgr.add_citizen(tempcitizen);
        } catch (err) {
          // into log
          log.add_log(JSON.stringify({
            personId: personId
          }), JSON.stringify(err))
          console.log('im in err cit', err)
        }
      }
    } catch (err) {
      // into log
      console.log("err", err);
    }
  } else {
    res.send({
      response: 404
    })
  }
});
// this function is for test only   
router.get('/getcitizen', async (req, res) => {
  console.log('im in get cit')
  const personId = req.query.PersonID;
  res.send(await citizen_mgr.get_citizen_P(personId));

});



module.exports = router;