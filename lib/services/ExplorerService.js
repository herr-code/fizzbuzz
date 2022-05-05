class ExplorerService {
    static filterByMission(explorers, mission) {
        const explorersByMission = explorers.filter(explorer => explorer.mission === mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInMission = ExplorerService.filterByMission(explorers, mission);
        return explorersInMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInMission = ExplorerService.filterByMission(explorers, mission);
        console.log("explorers in mission", explorersInMission)
        const explorersUsernamesInMission = explorersInMission.map(explorer => explorer.githubUsername);
        console.log("explorers in mission", explorersInMission)
        return explorersUsernamesInMission;
    }
}

module.exports = ExplorerService;