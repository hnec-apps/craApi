const express = require('express');
const router = express.Router();
const user_mgr = require('../controller/user').user_mgr;


router.post('/user/add', async (req, res) => {
  console.log(req.body);

  const user = await user_mgr.add_user(req.body);
  // console.log(user);
  res.send(req.body);
});



module.exports = router;