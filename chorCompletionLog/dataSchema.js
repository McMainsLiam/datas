module.exports = {
  $schema: "http://json-schema.org/draft-07/schema",
  $id: "http://example.com/example.json",
  type: "object",
  title: "The Root Schema",
  description: "The root schema comprises the entire JSON document.",
  required: ["companyInfo", "logData"],
  properties: {
    companyInfo: {
      $id: "#/properties/companyInfo",
      type: "object",
      title: "The Companyinfo Schema",
      description: "An explanation about the purpose of this instance.",
      default: {},
      examples: [
        {
          companyName: "Company Name"
        }
      ],
      required: ["companyName"],
      properties: {
        companyName: {
          $id: "#/properties/companyInfo/properties/companyName",
          type: "string",
          title: "The Companyname Schema",
          description: "An explanation about the purpose of this instance.",
          default: "",
          examples: ["Company Name"]
        }
      }
    },
    logData: {
      $id: "#/properties/logData",
      type: "object",
      title: "The Logdata Schema",
      description: "An explanation about the purpose of this instance.",
      default: {},
      examples: [
        {
          records: [
            {
              employee: "Liam McMains",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              date: "12/02/2019",
              completed: "12:00pm",
              room: "Room One",
              chor: "Doing something"
            },
            {
              employee: "Liam McMains",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              date: "12/02/2019",
              room: "Room One",
              completed: "12:00pm",
              chor: "Doing something"
            },
            {
              room: "Room One",
              completed: "12:00pm",
              chor: "Doing something",
              employee: "Liam McMains",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
              date: "12/02/2019"
            }
          ],
          dateArrived: "12/17/2019",
          animalsIn: 12.0,
          totalMortality: 23.0,
          chorCompletionRatioNumberator: 5.0,
          chorCompletionRatioDenominator: 8.0,
          building: "Building One",
          dailyVisitsPercentage: 80.0,
          averageLbs: 500.0,
          chorCompletionPercentage: 62.5,
          animalInBarnCurrently: 43.0,
          averageMortalityLbs: 350.0,
          group: "Group One",
          dailyVisitsRatioDenominator: 5.0,
          dailyVisitsRatioNumerator: 4.0
        }
      ],
      required: [
        "building",
        "group",
        "animalInBarnCurrently",
        "animalsIn",
        "dateArrived",
        "averageLbs",
        "totalMortality",
        "averageMortalityLbs",
        "dailyVisitsRatioNumerator",
        "dailyVisitsRatioDenominator",
        "dailyVisitsPercentage",
        "chorCompletionRatioNumberator",
        "chorCompletionRatioDenominator",
        "chorCompletionPercentage",
        "records"
      ],
      properties: {
        building: {
          $id: "#/properties/logData/properties/building",
          type: "string",
          title: "The Building Schema",
          description: "An explanation about the purpose of this instance.",
          default: "",
          examples: ["Building One"]
        },
        group: {
          $id: "#/properties/logData/properties/group",
          type: "string",
          title: "The Group Schema",
          description: "An explanation about the purpose of this instance.",
          default: "",
          examples: ["Group One"]
        },
        animalInBarnCurrently: {
          $id: "#/properties/logData/properties/animalInBarnCurrently",
          type: "integer",
          title: "The Animalinbarncurrently Schema",
          description: "An explanation about the purpose of this instance.",
          default: 0,
          examples: [43]
        },
        animalsIn: {
          $id: "#/properties/logData/properties/animalsIn",
          type: "integer",
          title: "The Animalsin Schema",
          description: "An explanation about the purpose of this instance.",
          default: 0,
          examples: [12]
        },
        dateArrived: {
          $id: "#/properties/logData/properties/dateArrived",
          type: "string",
          title: "The Datearrived Schema",
          description: "An explanation about the purpose of this instance.",
          default: "",
          examples: ["12/17/2019"]
        },
        averageLbs: {
          $id: "#/properties/logData/properties/averageLbs",
          type: "integer",
          title: "The Averagelbs Schema",
          description: "An explanation about the purpose of this instance.",
          default: 0,
          examples: [500]
        },
        totalMortality: {
          $id: "#/properties/logData/properties/totalMortality",
          type: "integer",
          title: "The Totalmortality Schema",
          description: "An explanation about the purpose of this instance.",
          default: 0,
          examples: [23]
        },
        averageMortalityLbs: {
          $id: "#/properties/logData/properties/averageMortalityLbs",
          type: "integer",
          title: "The Averagemortalitylbs Schema",
          description: "An explanation about the purpose of this instance.",
          default: 0,
          examples: [350]
        },
        dailyVisitsRatioNumerator: {
          $id: "#/properties/logData/properties/dailyVisitsRatioNumerator",
          type: "integer",
          title: "The Dailyvisitsrationumerator Schema",
          description: "An explanation about the purpose of this instance.",
          default: 0,
          examples: [4]
        },
        dailyVisitsRatioDenominator: {
          $id: "#/properties/logData/properties/dailyVisitsRatioDenominator",
          type: "integer",
          title: "The Dailyvisitsratiodenominator Schema",
          description: "An explanation about the purpose of this instance.",
          default: 0,
          examples: [5]
        },
        dailyVisitsPercentage: {
          $id: "#/properties/logData/properties/dailyVisitsPercentage",
          type: "integer",
          title: "The Dailyvisitspercentage Schema",
          description: "An explanation about the purpose of this instance.",
          default: 0,
          examples: [80]
        },
        chorCompletionRatioNumberator: {
          $id: "#/properties/logData/properties/chorCompletionRatioNumberator",
          type: "integer",
          title: "The Chorcompletionrationumberator Schema",
          description: "An explanation about the purpose of this instance.",
          default: 0,
          examples: [5]
        },
        chorCompletionRatioDenominator: {
          $id: "#/properties/logData/properties/chorCompletionRatioDenominator",
          type: "integer",
          title: "The Chorcompletionratiodenominator Schema",
          description: "An explanation about the purpose of this instance.",
          default: 0,
          examples: [8]
        },
        chorCompletionPercentage: {
          $id: "#/properties/logData/properties/chorCompletionPercentage",
          type: "number",
          title: "The Chorcompletionpercentage Schema",
          description: "An explanation about the purpose of this instance.",
          default: 0,
          examples: [62.5]
        },
        records: {
          $id: "#/properties/logData/properties/records",
          type: "array",
          title: "The Records Schema",
          description: "An explanation about the purpose of this instance.",
          default: [],
          items: {
            $id: "#/properties/logData/properties/records/items",
            type: "object",
            title: "The Items Schema",
            description: "An explanation about the purpose of this instance.",
            default: {},
            examples: [
              {
                employee: "Liam McMains",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                date: "12/02/2019",
                completed: "12:00pm",
                room: "Room One",
                chor: "Doing something"
              },
              {
                employee: "Liam McMains",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                date: "12/02/2019",
                room: "Room One",
                completed: "12:00pm",
                chor: "Doing something"
              },
              {
                room: "Room One",
                completed: "12:00pm",
                chor: "Doing something",
                employee: "Liam McMains",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                date: "12/02/2019"
              }
            ],
            required: [
              "date",
              "room",
              "chor",
              "description",
              "completed",
              "employee"
            ],
            properties: {
              date: {
                $id:
                  "#/properties/logData/properties/records/items/properties/date",
                type: "string",
                title: "The Date Schema",
                description:
                  "An explanation about the purpose of this instance.",
                default: "",
                examples: ["12/02/2019"]
              },
              room: {
                $id:
                  "#/properties/logData/properties/records/items/properties/room",
                type: "string",
                title: "The Room Schema",
                description:
                  "An explanation about the purpose of this instance.",
                default: "",
                examples: ["Room One"]
              },
              chor: {
                $id:
                  "#/properties/logData/properties/records/items/properties/chor",
                type: "string",
                title: "The Chor Schema",
                description:
                  "An explanation about the purpose of this instance.",
                default: "",
                examples: ["Doing something"]
              },
              description: {
                $id:
                  "#/properties/logData/properties/records/items/properties/description",
                type: "string",
                title: "The Description Schema",
                description:
                  "An explanation about the purpose of this instance.",
                default: "",
                examples: [
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                ]
              },
              completed: {
                $id:
                  "#/properties/logData/properties/records/items/properties/completed",
                type: "string",
                title: "The Completed Schema",
                description:
                  "An explanation about the purpose of this instance.",
                default: "",
                examples: ["12:00pm"]
              },
              employee: {
                $id:
                  "#/properties/logData/properties/records/items/properties/employee",
                type: "string",
                title: "The Employee Schema",
                description:
                  "An explanation about the purpose of this instance.",
                default: "",
                examples: ["Liam McMains"]
              }
            }
          }
        }
      }
    }
  }
};
