const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

const server = express();
const PORT = process.env.PORT || 5000; // Process environment port in case we use heroku or 5000
const rocket = "\u{1F680}";

server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// server is online! go to http://localhost:5000/graphql
server.listen(PORT, () =>
  console.log(`Server started on port ${PORT} ${rocket} ${rocket} ${rocket} `)
);

// sample query
/*

    {
        launches{
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local
            rocket {
            rocket_id
            rocket_name
            rocket_type
            }
        }
    }

*/
