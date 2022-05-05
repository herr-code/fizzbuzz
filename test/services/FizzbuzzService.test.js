const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Tests para Fizzbuzz Service", () => {
    test("Debe imprimir mensaje de error si recibe un valor que no sea número (explorer.score)", () => {
        const expected = "Error: The argument must be a number";
        const result = FizzbuzzService.applyValidationInExplorer({name: "Explorer", score: "16"});
        expect(expected).toBe(result);
    });

    test("Debe imprimir el mismo valor en explorer.trick y explorer.score si no cumple con las reglas de abajo", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const expected = 1;
        const result = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(expected).toBe(result.trick);
    });

    test("Debe imprimir FIZZ si recibe 3 (explorer.score)", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        const expected = "FIZZ";
        const result = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(expected).toBe(result.trick);
    });

    test("Debe imprimir FIZZ si recibe un multiplo de 3 (explorer.score)", () => {
        const explorer3 = {name: "Explorer3", score: 6};
        const expected = "FIZZ";
        const result = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(expected).toBe(result.trick);
    });

    test("Debe imprimir BUZZ si recibe 5 (explorer.score)", () => {
        const explorer5 = {name: "Explorer5", score: 5};
        const expected = "BUZZ";
        const result = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(expected).toBe(result.trick);
    });

    test("Debe imprimir BUZZ si recibe un multiplo de 5 (explorer.score)", () => {
        const explorer5 = {name: "Explorer5", score: 10};
        const expected = "BUZZ";
        const result = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(expected).toBe(result.trick);
    });

    test("Debe imprimir FIZZBUZZ si recibe un multiplo de 3 y 5 (explorer.score)", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        const expected = "FIZZBUZZ";
        const result = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(expected).toBe(result.trick);
    });
});