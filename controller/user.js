const models = require("../modules");
const easyPbkdf2 = require("easy-pbkdf2")();
exports.user_mgr = {
  get_users: async () => {
    try {
      return await models.User.findAndCountAll({
        where: {
          status: 1
        }
      });
    } catch (err) {
      return (err);
    }
  },

  get_user_id: async id => {

    try {
      return await models.User.findOne({
        where: {
          status: 1,
          id: id
        }
      });
    } catch (err) {
      return (err);
    }
  },
  get_user_email: async email => {

    try {
      return await models.User.findOne({
        where: {
          status: 1,
          email: email
        }
      });
    } catch (err) {
      return (err);
    }
  },
  add_user: async body => {
    const salt = easyPbkdf2.generateSalt(), //we generate a new salt for every new user
      password = body.password; //we generate a new password for every new user
    easyPbkdf2.secureHash(password, salt, function (err, passwordHash, originalSalt) {
      var obj = {
        name: body.name,
        email: body.email,
        password: passwordHash,
        phone: body.phone,
        salt: originalSalt,
        level: 1,
      }
      try {
        models.User.create(obj).then(function (user) {
          return (user);
        });
        // return await models.User.create(obj);
      } catch (err) {
        return (err);
      }
    });
  },




  update_pass: function (pass, cb) {
    var salt = easyPbkdf2.generateSalt(), //we generate a new salt for every new user
      password = pass; //we generate a new password for every new user
    easyPbkdf2.secureHash(pass, salt, function (err, passwordHash, originalSalt) {
      var obj = {
        password: passwordHash,
        salt: originalSalt,
      }
      cb(obj);
    });
  },

};