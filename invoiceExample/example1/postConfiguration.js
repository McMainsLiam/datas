const dataSchema = require("./dataSchema");

module.exports = {
  stylesheet: {
    id: "stylesheet_id",
    url:
      "https://raw.githubusercontent.com/McMainsLiam/datas/master/invoiceExample/example.css"
  },
  handlebarsFile: {
    id: "handlebars_id",
    url:
      "https://raw.githubusercontent.com/McMainsLiam/datas/master/invoiceExample/example.handlebars",
    jsonSchema: dataSchema
  },
  contexts: [
    {
      id: "invoiceInformation",
      url:
        "https://raw.githubusercontent.com/McMainsLiam/datas/master/invoiceExample/data/invoiceInformation.json"
    },
    {
      id: "receiverInformation",
      url:
        "https://raw.githubusercontent.com/McMainsLiam/datas/master/invoiceExample/data/receiverInformation.json"
    },
    {
      id: "senderInformation",
      url:
        "https://raw.githubusercontent.com/McMainsLiam/datas/master/invoiceExample/data/senderInformation.json"
    }
  ]
};
