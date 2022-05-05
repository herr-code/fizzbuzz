class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        if (typeof explorer.score !== "number") {
            return "Error: The argument must be a number";
        }
        if (explorer.score === 0) {
            explorer.trick = 0;
            return explorer;
        }
        if (explorer.score % 3 === 0 && explorer.score % 5 === 0) {
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }
        if (explorer.score % 3 === 0) {
            explorer.trick = "FIZZ";
            return explorer;
        }
        if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
            return explorer;
        }
        explorer.trick = explorer.score;
        return explorer;
    }
}

module.exports = FizzbuzzService;