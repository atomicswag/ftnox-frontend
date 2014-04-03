var util = require("./util");

///////////// USER MODEL
///////////// USER MODEL

function User(data) {
    var user = util.newObject(User);
    for (var key in data) {
        user[key] = data[key];
    }
    user.roles = user.roles.split(",");
    // Set named attributes on the array,
    // handy for checking roles in handlebars.
    for (var i=0; i<user.roles.length; i++) {
        user.roles[user.roles[i]] = true;
    }
    return user
}

module.exports = {
    User:   User
};
