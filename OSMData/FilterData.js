const fs = require('fs'); //requiring module fs

var fixedData = []; //declared array of finished data
var data = JSON.parse(fs.readFileSync("./export.json", { encoding: 'utf8', flag: 'r' })); //reading file and parsing it
var elements = data.elements
elements.forEach(city =>{
    var keyTags = Object.keys(city.tags);
    var valueTags = Object.values(city.tags);
    var ogKeyIndex = keyTags.findIndex(key => (key === 'name'))
    var enKeyIndex = keyTags.findIndex(key => (key === 'name:en'))
    var ruKeyIndex = keyTags.findIndex(key => (key === 'name:ru'))

    var dataJson = {
        id : JSON.stringify(city.id),
        intName : valueTags[ogKeyIndex],
        enName : valueTags[enKeyIndex],
        ruName : valueTags[ruKeyIndex],
        lat : JSON.stringify(city.lat),
        lon : JSON.stringify(city.lon)
    }
    fixedData.push(dataJson);
})
// console.log(fixedData);
var jsonFixedData = {
    cities: fixedData
}

fs.writeFileSync("./releventData.json", JSON.stringify(jsonFixedData));     //writing new file for the new info