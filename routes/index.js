const delay = require('delay');
const axios = require('axios');
const request = require('request-promise');
const citizen_mgr = require('../controller/citizen').citizen_mgr;
const url = 'http://localhost:5000/getcitizen';
module.exports = app => {

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

  app.get('/', async (req, res) => {
    const personId = req.query.PersonID;
    if (personId) {
      try {
        let result = await doRequest(personId);
        res.send(result);
        if (result.person_id) {
          try {
            // check the result
            await citizen_mgr.add_citizen(result);
          } catch (err) {
            // into log
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
  app.get('/getcitizen', async (req, res) => {

    const personId = req.query.PersonID;
    res.send(await citizen_mgr.get_citizen_P(personId));

  });
}