const dataSchema = require("../dataSchema");
const pagedData = require("./data/pagedData.json");

module.exports = {
  stylesheet: {
    id: "stylesheet_id",
    url:
      "https://raw.githubusercontent.com/McMainsLiam/datas/master/invoiceExample/example1/example.css"
  },
  handlebarsFile: {
    id: "handlebars_id",
    url:
      "https://raw.githubusercontent.com/McMainsLiam/datas/master/invoiceExample/example.handlebars",
    jsonSchema: dataSchema
  },
  pagedData,
  contexts: [
    {
      id: "invoiceInformation",
      url:
        "https://raw.githubusercontent.com/McMainsLiam/datas/master/invoiceExample/example1/data/invoiceInformation.json"
    },
    {
      id: "receiverInformation",
      url:
        "https://raw.githubusercontent.com/McMainsLiam/datas/master/invoiceExample/example1/data/receiverInformation.json"
    },
    {
      id: "senderInformation",
      url:
        "https://raw.githubusercontent.com/McMainsLiam/datas/master/invoiceExample/example1/data/senderInformation.json"
    }
  ]
};
