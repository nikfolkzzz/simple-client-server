const clientRoutes = require("../routes/clientRoutes");
const config = require("../config");

config.protocol.get(clientRoutes.getYear, async res => {
  const body = [];
  for await (const chunk of res) {
    body.push(JSON.parse(chunk));
  }
  console.table(JSON.stringify(body));
});
