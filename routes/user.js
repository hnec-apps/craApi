const user_mgr = require('../controller/user').user_mgr;

module.exports = app => {
 
  app.post('/user/add', async (req, res) => {
    const { email, name } = req.body;

    const user = await user_mgr.add_user(req.body);
    console.log(user);
    res.send(user);
  });
};
