const rollys = require("../../index")

var Schema =  (function () {
    function Schema(name, age, phone, role, boolmod, booldeveloper,boolfriend,boolbooster) {
        rollys.push("staff", {
            name: name,
            age: age,
            phone: phone,
            role: role,
            moderator: boolmod,
            developer: booldeveloper,
            friend: boolfriend,
            booster: boolbooster
        }) 
    }

    return Schema;

}());
module.exports = Schema;