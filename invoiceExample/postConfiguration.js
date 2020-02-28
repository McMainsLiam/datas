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
      id: "invoiceDataContext",
      url:
        "https://raw.githubusercontent.com/McMainsLiam/datas/master/invoiceExample/data1.json"
    }
  ]
};
