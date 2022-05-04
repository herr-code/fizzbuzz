const ExplorerService = require('./../../lib/services/ExplorerService');

describe("Tests para Explorer Service", () => {
    test("Requerimiento 1: Calcular todos los explorer", () => {
        const explorers = [{mission: "node"}]
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });
});