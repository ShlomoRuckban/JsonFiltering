const fs = require('fs'); //requiring module fs

var fixedData = []; //declared array of finished data
var sheet = JSON.parse(fs.readFileSync("./data.json", { encoding: 'utf8', flag: 'r' })); //reading file and parsing it
sheet = sheet.Sheet1    //changing the data from json to array to make it easier to work with 

for (var i = 0; i < sheet.length; i++) {    //going through each slot in the array to give it keys
    var jsonDataInfo = {
        id: JSON.stringify(sheet[i][0]),
        city: sheet[i][1],
        lat: JSON.stringify(sheet[i][5]),
        lon: JSON.stringify(sheet[i][6]),
        country: sheet[i][8],
        latX: JSON.stringify(sheet[i][9]),
        lonX: JSON.stringify(sheet[i][11]),
        latY: JSON.stringify(sheet[i][10]),
        lonY: JSON.stringify(sheet[i][12])
    }

    fixedData.push(jsonDataInfo);   //pushing it into a new array
}
var jsonFixedData = {
    cities: fixedData
}

fs.writeFileSync("./releventData.json", JSON.stringify(jsonFixedData));     //writing new file for the new info