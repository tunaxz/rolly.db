Gelişmiş Veri Tabanı Modülü

Schema.js
```
const rollys = require("rolly.db")
var Schema =  (function () {
    function Schema(name, age, phone, role, boolmod, booldeveloper,boolfriend,boolbooster) {
        rollys.create("staff", {
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
```
İndex.js
```
const rollys = require("rolly.db")
const DataSchema = require("Schema.js")

new DataSchema("Tunax", 00, 0000000000, "Owner", true, true, true, true)

console.log(rollys.findData("staff").name)

```
