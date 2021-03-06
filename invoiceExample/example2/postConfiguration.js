const dataSchema = require("../dataSchema");
const pagedData = require("./data/pagedData.json");

module.exports = {
  stylesheet: {
    url:
      "https://raw.githubusercontent.com/McMainsLiam/datas/master/invoiceExample/example2/example.css"
  },
  handlebarsFile: {
    url:
      "https://raw.githubusercontent.com/McMainsLiam/datas/master/invoiceExample/example.handlebars",
    dataSchema
  },
  pagedData,
  contexts: [
    {
      id: "invoiceInformation",
      url:
        "https://raw.githubusercontent.com/McMainsLiam/datas/master/invoiceExample/example2/data/invoiceInformation.json"
    },
    {
      id: "receiverInformation",
      url:
        "https://raw.githubusercontent.com/McMainsLiam/datas/master/invoiceExample/example2/data/receiverInformation.json"
    },
    {
      id: "senderInformation",
      url:
        "https://raw.githubusercontent.com/McMainsLiam/datas/master/invoiceExample/example2/data/senderInformation.json"
    }
  ]
};
