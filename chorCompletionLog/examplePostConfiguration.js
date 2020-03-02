const dataSchema = require("./dataSchema");

module.exports = {
  stylesheet: {
    id: "stylesheet_id",
    url:
      "https://raw.githubusercontent.com/McMainsLiam/datas/master/chorCompletionLog/example.css"
  },
  handlebarsFile: {
    id: "handlebars_id",
    url:
      "https://raw.githubusercontent.com/McMainsLiam/datas/master/chorCompletionLog/example.handlebars",
    dataSchema
  },
  contexts: [
    {
      id: "companyInfo",
      url:
        "https://raw.githubusercontent.com/McMainsLiam/datas/master/chorCompletionLog/data/companyInfo.json"
    },
    {
      id: "logData",
      url:
        "https://raw.githubusercontent.com/McMainsLiam/datas/master/chorCompletionLog/data/logData.json"
    }
  ]
};