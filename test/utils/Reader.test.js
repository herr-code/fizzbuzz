const Reader = require('./../../lib/utils/Reader');

describe("Tests para Reader utils", () => {
    test("Debe imprimir Woopa1 para el primer explorer name", () => {
        const expected = "Woopa1";
        const result = Reader.readJsonFile('explorers.json');
        expect(expected).toBe(result[0].name);
    });
});