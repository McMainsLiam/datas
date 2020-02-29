module.exports = {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "http://objectspectrum.com/invoice-example",
  type: "object",
  title: "The Root Schema",
  required: ["senderInformation", "receiverInformation", "invoiceInformation"],
  properties: {
    senderInformation: {
      $id: "#/properties/senderInformation",
      type: "object",
      title: "The Senderinformation Schema",
      required: [
        "name",
        "streetAddress",
        "cityStateZip",
        "phone",
        "email",
        "logoUrl"
      ],
      properties: {
        name: {
          $id: "#/properties/senderInformation/properties/name",
          type: "string",
          title: "The Name Schema",
          default: "",
          examples: ["ObjectSpectrum, LLC"],
          pattern: "^(.*)$"
        },
        streetAddress: {
          $id: "#/properties/senderInformation/properties/streetAddress",
          type: "string",
          title: "The Streetaddress Schema",
          default: "",
          examples: ["4400 Beltway Drive"],
          pattern: "^(.*)$"
        },
        cityStateZip: {
          $id: "#/properties/senderInformation/properties/cityStateZip",
          type: "string",
          title: "The Citystatezip Schema",
          default: "",
          examples: ["Addison, TX 75001 US"],
          pattern: "^(.*)$"
        },
        phone: {
          $id: "#/properties/senderInformation/properties/phone",
          type: "string",
          title: "The Phone Schema",
          default: "",
          examples: ["(972) 456-9100"],
          pattern: "^(.*)$"
        },
        email: {
          $id: "#/properties/senderInformation/properties/email",
          type: "string",
          title: "The Email Schema",
          default: "",
          examples: ["accounting@objectspectrum.com"],
          pattern: "^(.*)$"
        },
        logoUrl: {
          $id: "#/properties/senderInformation/properties/logoUrl",
          type: "string",
          title: "The Logourl Schema",
          default: "",
          examples: [
            "https://media-exp1.licdn.com/dms/image/C4E0BAQFVei-EGlUD3w/company-logo_200_200/0?e=2159024400&v=beta&t=hOpw1qytvT6t0LnG4s_tnXYjPHFB9IDwhHFQkHta8lw"
          ],
          pattern: "^(.*)$"
        }
      }
    },
    receiverInformation: {
      $id: "#/properties/receiverInformation",
      type: "object",
      title: "The Receiverinformation Schema",
      required: ["name", "businessName", "streetAddress", "cityStateZip"],
      properties: {
        name: {
          $id: "#/properties/receiverInformation/properties/name",
          type: "string",
          title: "The Name Schema",
          default: "",
          examples: ["John Doe"],
          pattern: "^(.*)$"
        },
        businessName: {
          $id: "#/properties/receiverInformation/properties/businessName",
          type: "string",
          title: "The Businessname Schema",
          default: "",
          examples: ["Co. of John Doe"],
          pattern: "^(.*)$"
        },
        streetAddress: {
          $id: "#/properties/receiverInformation/properties/streetAddress",
          type: "string",
          title: "The Streetaddress Schema",
          default: "",
          examples: ["3322 Street Lane Drive"],
          pattern: "^(.*)$"
        },
        cityStateZip: {
          $id: "#/properties/receiverInformation/properties/cityStateZip",
          type: "string",
          title: "The Citystatezip Schema",
          default: "",
          examples: ["Richardson, TX 86251 US"],
          pattern: "^(.*)$"
        }
      }
    },
    invoiceInformation: {
      $id: "#/properties/invoiceInformation",
      type: "object",
      title: "The Invoiceinformation Schema",
      required: ["identifier", "date", "dueDate", "terms", "items"],
      properties: {
        identifier: {
          $id: "#/properties/invoiceInformation/properties/identifier",
          type: "string",
          title: "The Identifier Schema",
          default: "",
          examples: ["1804776"],
          pattern: "^(.*)$"
        },
        date: {
          $id: "#/properties/invoiceInformation/properties/date",
          type: "string",
          title: "The Date Schema",
          default: "",
          examples: ["04/16/2018"],
          pattern: "^(.*)$"
        },
        dueDate: {
          $id: "#/properties/invoiceInformation/properties/dueDate",
          type: "string",
          title: "The Duedate Schema",
          default: "",
          examples: ["04/16/2018"],
          pattern: "^(.*)$"
        },
        terms: {
          $id: "#/properties/invoiceInformation/properties/terms",
          type: "string",
          title: "The Terms Schema",
          default: "",
          examples: ["Due on receipt"],
          pattern: "^(.*)$"
        },
        items: {
          $id: "#/properties/invoiceInformation/properties/items",
          type: "array",
          title: "The Items Schema",
          items: {
            $id: "#/properties/invoiceInformation/properties/items/items",
            type: "object",
            title: "The Items Schema",
            required: ["date", "service", "quantity", "rate"],
            properties: {
              date: {
                $id:
                  "#/properties/invoiceInformation/properties/items/items/properties/date",
                type: "string",
                title: "The Date Schema",
                default: "",
                examples: ["04/16/2018"],
                pattern: "^(.*)$"
              },
              service: {
                $id:
                  "#/properties/invoiceInformation/properties/items/items/properties/service",
                type: "object",
                title: "The Service Schema",
                required: ["title", "description"],
                properties: {
                  title: {
                    $id:
                      "#/properties/invoiceInformation/properties/items/items/properties/service/properties/title",
                    type: "string",
                    title: "The Title Schema",
                    default: "",
                    examples: ["Prototyping"],
                    pattern: "^(.*)$"
                  },
                  description: {
                    $id:
                      "#/properties/invoiceInformation/properties/items/items/properties/service/properties/description",
                    type: "string",
                    title: "The Description Schema",
                    default: "",
                    examples: [
                      "Engineering Prototype of Laser ToF Water Level Sensor"
                    ],
                    pattern: "^(.*)$"
                  }
                }
              },
              quantity: {
                $id:
                  "#/properties/invoiceInformation/properties/items/items/properties/quantity",
                type: "integer",
                title: "The Quantity Schema",
                default: 0,
                examples: [1]
              },
              rate: {
                $id:
                  "#/properties/invoiceInformation/properties/items/items/properties/rate",
                type: "integer",
                title: "The Rate Schema",
                default: 0,
                examples: [3000]
              },
              totalCost: {
                $id:
                  "#/properties/invoiceInformation/properties/items/items/properties/totalCost",
                type: "integer",
                title: "The Total Cost Schema",
                default: 0,
                examples: [1000]
              },
              balanceDue: {
                $id:
                  "#/properties/invoiceInformation/properties/items/items/properties/balanceDue",
                type: "integer",
                title: "The Balance Due Schema",
                default: 0,
                examples: [1000]
              }
            }
          }
        }
      }
    }
  }
};
