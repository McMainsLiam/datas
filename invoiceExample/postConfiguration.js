const dataSchema = require("./dataSchema");

module.exports = {
  stylesheet: {
    id: "stylesheet_id",
    url: ""
  },
  handlebarsFile: {
    id: "handlebars_id",
    url: "",
    jsonSchema: dataSchema
  },
  contexts: [
    {
      id: "invoiceDataContext",
      url: ""
    }
  ]
};
