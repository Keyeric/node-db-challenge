const server = require("./api/server");
const port = process.env.PORT || 6000;

server.listen(port, () => {
  console.log(`\n*** Creating Development Stage in Cubicle #${port} ***\n`);
});
