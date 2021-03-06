const decodeJson = require("unescape-json");

const json = {
  "data": "{\r\n\"people\":[\r\n{\r\n\"name\":\"John\",\r\n\"age\":30,\r\n\"cars\":[\r\n\"Mercedes\"\r\n]\r\n},\r\n{\r\n\"name\":\"Sally\",\r\n\"age\":24,\r\n\"cars\":[\r\n\"Ford\",\r\n\"BMW\",\r\n\"Fiat\"\r\n]\r\n}\r\n]\r\n}"
};

var decodedJson = decodeJson(json); // Returns JSON Object

console.log(JSON.stringify(decodedJson, null, 2));