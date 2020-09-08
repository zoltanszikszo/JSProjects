const team = {
    _players: [
        {
            firstName: 'John',
            lastName: 'Derek',
            age: 20
        },
        {
            firstName: 'Lisa',
            lastName: 'Jackson',
            age: 13
        },
        {
            firstName: 'Jeremy',
            lastName: 'Tyson',
            age: 14
        },
    ],
    _games: [
        {
            opponent: 'Lakers',
            teamPoints: 32,
            opponentPoints: 25
        },
        {
            opponent: 'OKC',
            teamPoints: 80,
            opponentPoints: 60
        },
        {
            opponent: 'Nuggets',
            teamPoints: 40,
            opponentPoints: 70   
        }
    ],
    get players(){
        return this._players;
    },
    get games(){
        return this._games;
    },
    addPlayer(firstName, lastName, age){
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };

        this.players.push(player);
    },
    addGame(opponentName, teamPoints, opponentPoints){
        const game = {
            opponentName: opponentName,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };

        this.games.push(game);
    }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Knicks', 30, 50);

console.log(team.games);