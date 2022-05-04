const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService")

const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo

// Aplicación del ExplorerService sobre la lista de explorers
// console.log(ExplorerService.filterByMission(explorers, "node"));
// console.log(ExplorerService.getAmountOfExplorersByMission(explorers, "node"));
console.log(ExplorerService.getExplorersUsernamesByMission(explorers, "node"));