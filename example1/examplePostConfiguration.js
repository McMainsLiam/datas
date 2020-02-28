const dataSchema = require("./dataSchema");

module.exports = {
  stylesheet: {
    id: "stylesheet_id",
    url:
      "https://raw.githubusercontent.com/McMainsLiam/datas/master/example1/example.css"
  },
  handlebarsFile: {
    id: "handlebars_id",
    url:
      "https://raw.githubusercontent.com/McMainsLiam/datas/master/example1/example.handlebars",
    jsonSchema: dataSchema
  },
  contexts: [
    {
      id: "peopleContext",
      url:
        "https://raw.githubusercontent.com/McMainsLiam/datas/master/example1/data1.json"
    },
    {
      id: "invoiceContext",
      url:
        "https://raw.githubusercontent.com/McMainsLiam/datas/master/example1/data2.json"
    },
    {
      id: "defaultContext",
      url:
        "https://raw.githubusercontent.com/McMainsLiam/datas/master/example1/data3.json"
    }
  ]
};
