module.exports = {
  definitions: {},
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "http://objectspectrum.com/server-report-test",
  type: "object",
  title: "The Root Schema",
  required: ["peopleContext", "invoiceContext", "defaultContext"],
  properties: {
    peopleContext: {
      $id: "#/properties/peopleContext",
      type: "array",
      title: "The Peoplecontext Schema",
      items: {
        $id: "#/properties/peopleContext/items",
        type: "object",
        title: "The Items Schema",
        required: ["id", "name", "age"],
        properties: {
          id: {
            $id: "#/properties/peopleContext/items/properties/id",
            type: "integer",
            title: "The Id Schema",
            default: 0,
            examples: [1]
          },
          name: {
            $id: "#/properties/peopleContext/items/properties/name",
            type: "string",
            title: "The Name Schema",
            default: "",
            examples: ["person one"],
            pattern: "^(.*)$"
          },
          age: {
            $id: "#/properties/peopleContext/items/properties/age",
            type: "integer",
            title: "The Age Schema",
            default: 0,
            examples: [10]
          }
        }
      }
    },
    invoiceContext: {
      $id: "#/properties/invoiceContext",
      type: "array",
      title: "The Invoicecontext Schema",
      items: {
        $id: "#/properties/invoiceContext/items",
        type: "object",
        title: "The Items Schema",
        required: ["id", "name", "age"],
        properties: {
          id: {
            $id: "#/properties/invoiceContext/items/properties/id",
            type: "integer",
            title: "The Id Schema",
            default: 0,
            examples: [1]
          },
          name: {
            $id: "#/properties/invoiceContext/items/properties/name",
            type: "string",
            title: "The Name Schema",
            default: "",
            examples: ["person one"],
            pattern: "^(.*)$"
          },
          age: {
            $id: "#/properties/invoiceContext/items/properties/age",
            type: "integer",
            title: "The Age Schema",
            default: 0,
            examples: [10]
          }
        }
      }
    },
    defaultContext: {
      $id: "#/properties/defaultContext",
      type: "object",
      title: "The Defaultcontext Schema",
      required: ["name", "hometown", "kids"],
      properties: {
        name: {
          $id: "#/properties/defaultContext/properties/name",
          type: "string",
          title: "The Name Schema",
          default: "",
          examples: ["Alan"],
          pattern: "^(.*)$"
        },
        hometown: {
          $id: "#/properties/defaultContext/properties/hometown",
          type: "string",
          title: "The Hometown Schema",
          default: "",
          examples: ["Somewhere, TX"],
          pattern: "^(.*)$"
        },
        kids: {
          $id: "#/properties/defaultContext/properties/kids",
          type: "array",
          title: "The Kids Schema",
          items: {
            $id: "#/properties/defaultContext/properties/kids/items",
            type: "object",
            title: "The Items Schema",
            required: ["name", "age"],
            properties: {
              name: {
                $id:
                  "#/properties/defaultContext/properties/kids/items/properties/name",
                type: "string",
                title: "The Name Schema",
                default: "",
                examples: ["Jimmy"],
                pattern: "^(.*)$"
              },
              age: {
                $id:
                  "#/properties/defaultContext/properties/kids/items/properties/age",
                type: "string",
                title: "The Age Schema",
                default: "",
                examples: ["12"],
                pattern: "^(.*)$"
              }
            }
          }
        }
      }
    }
  }
};
