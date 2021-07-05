const fs = require("fs")

/** 
 * 
 * Coded By Roffly
 * 
 */


class rollydb {

    constructor() {
        if (!fs.existsSync("rollydb")){
            if(!fs.existsSync(`./json.rolly`)) {
                fs.writeFileSync(`./json.rolly`, "{}");
                return;
            }
        
        } else {
            if(!fs.existsSync(`./json.rolly`)) {
                fs.writeFileSync(`./json.rolly`, "{}");
               
            }
        }
    }


/** 
 * 
 * Coded By Roffly
 * 
 */

 get info(){
    return{
        name: "rolly.db",
        type:"database",
        version: "1.0.14",
        owner: "roffly",
        developers: ["roffly"],
        github: "https://github.com/WynexDev/rolly.db",
        commands: `${Object.entries("./index.js").length}`,
        file: "./json.rolly"
    }
}

 includes(key) {
    if(!key) {
        throw new TypeError("Lütfen database dosyasında aramak istediğiniz veri adını girin.")
    }
    return fs.readFileSync("./json.rolly").includes(key)
}
 key(event = {
    key: new String()
  }) {

    if(event.key == "wynex") {  
        console.log("Key is logged")
    } 
    if(event.key !== "wynex") { 
      throw new TypeError("Sa") 
  } 
    
  }
    create(veri, değer) {
  
        if(!veri) throw new TypeError('No data specified. Need Help? Check Out: discord.gg/raVhvnK8xG')
        if(!değer) throw new TypeError('No value specified. Need Help? Check Out: discord.gg/raVhvnK8xG')
    const rollydbs = JSON.parse(fs.readFileSync('./json.rolly', "utf8"))
    rollydbs[veri] = değer
    return fs.writeFileSync('./json.rolly', JSON.stringify(rollydbs, null, 3))
    
}


    findData(veri) {

        if(!veri) throw new TypeError('No data specified. Need Help? Check Out: discord.gg/raVhvnK8xG')
    const rollydbs = JSON.parse(fs.readFileSync('./json.rolly', "utf8"))
    return rollydbs[veri]


}

    get(veri) {

        if(!veri) throw new TypeError('No data specified. Need Help? Check Out: discord.gg/raVhvnK8xG')
    const rollydbs = JSON.parse(fs.readFileSync('./json.rolly', "utf8"))
    return rollydbs[veri]


    }


    deleteData(veri) {
      
    if(!veri) throw new TypeError('Veri Girmediniz')
    const rollydbs = JSON.parse(fs.readFileSync('./json.rolly', "utf8"))
    if(!rollydbs[veri]) throw new TypeError('[Rolly] Böyle Bir Veri Bulunamadı')
    delete rollydbs[veri]
    return fs.writeFileSync('./json.rolly', JSON.stringify(rollydbs, null, 3))
}
   all() {
    return JSON.parse(fs.readFileSync(`./json.rolly`, 'utf-8'));
}


    updateData(key, func) {
        if(this.has(key)) {
        var data = this.get(key);
        data = this.create(key, func);
        return data;
    } else {
        new TypeError("Böyle Bir Veri Bulunamadı")
}



}


    has(key) {
        return !!this.get(key);
}

    backup(dosyaAdı) {
    if(!dosyaAdı) throw new TypeError('Dosya Adı Girmediniz')
    const rollydbs = JSON.parse(fs.readFileSync('./json.rolly', "utf8"))
    return fs.writeFileSync(`./json.${dosyaAdı}`, JSON.stringify(rollydbs, null, 3))
}

    coder() {
        console.log("Coded By Roffly")
    }

    coders() {
        console.log("Coded By Roffly")
    }
    push(key, value) {

        const data = this.get(key);
        if (!data) {
            // @ts-ignore
            return this.create(key, [value]);
        }
        if (Array.isArray(data)) {
            data.push(value);
            return this.create(key, data);
        } else {
            // @ts-ignore
            return this.create(key, [value]);
     
        }

    }
}


module.exports = new rollydb
/** 
* 
* Coded By Roffly
* 
*/