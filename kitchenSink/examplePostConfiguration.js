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
    dataSchema
  },
  contexts: []
};
