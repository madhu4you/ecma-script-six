/**
 * simulate a Midshipman in the Royal Navy in the mid-19th century playing Crown and Anchor, a betting game popular at the time.
 * 
 * The game is simple: there’s a mat with six squares with symbols for “Crown,” “Anchor,” “Heart,” “Club,” “Spade,” and “Diamond.” 
 * The sailor places any number of coins on any combination of the squares: these become the bets. 
 * Then he rolls three six-sided dice with faces that match the squares on the mat. For each die that matches a square that has a bet on it, 
 * the sailor wins that amount of money. Here are some examples of how the sailor might play, and what the payout is:
 * 
 * Bet                                      Roll                Payout
 * -------------------------------------------------------------------------------------------
 * 5 pence on Crown Crown,                  Crown,          Crown 15 pence
 * 5 pence on Crown Crown,                  Crown,          Anchor 10 pence
 * 5 pence on Crown Crown,                  Heart,          Spade 5 pence
 * 5 pence on Crown Heart,                  Anchor,         Spade 0
 * 3 pence on Crown, 2 on Spade Crown,      Crown,          Crown 9 pence
 * 3 pence on Crown, 2 on Spade Crown,      Spade,          Anchor 5 pence
 * 1 pence on all squares                   Any roll        3 pence (not a good strategy!)
 * --------------------------------------------------------------------------------------------
 */

class Midshipman {
    constructor(funds) {
        this.funds = funds || 50;
        this.bets = {
            crown: 0,
            anchor: 0,
            heart: 0,
            spade: 0,
            club: 0,
            diamond: 0
        };
        this.face = new Face();
        this.hand = [];
        this.winngings = 0;
        this.round = 0;
    }
    simulate = function () {
        while (this.fundLimit) {
            this.round++;
            console.log(`round ${round}:`);
            console.log(`\tstarting funds: ${funds}p`);
            //Place Bets
            this.placeBets();
            //Roll Dice-
            this.rollDice();
            //Collect Winnings
            this.winngings();
        }
        console.log(`\tending funs: ${this.funds}`);
    }
    placeBets = function () {
        let totalBet = this.rand(1, this.funds);
        if (totalBet === 7) {
            totalBet = this.funds;
            this.bets.heart = totalBet;
        } else {
            //Distribute total bet
            let remaining = totalBet;
            do {
                let bet = rand(1, remaining);
                let face = this.face.randFace();
                this.bets[face] += bet;
                remaining -= bet;
            } while (remaining > 0)
        }
        this.funds -= totalBet;
        console.log('\tbets: ' + Object.keys(this.bets).map(face => `${face}: ${this.bets[face]} pence`).join(', ') + ` (total: ${totalBet} pence)`);
    };
    rollDice = function () {
        for (let roll = 0; roll < 3; roll++) {
            this.hand.push(this.face.randFace());
        }
        console.log(`\thand: ${hand.join(', ')}`);
    };
    collectWinnings = function () {
        for (let die = 0; die < this.hand.length; die++) {
            let face = this.hand[die];
            if (this.bets[face] > 0) 
                this.winnings += this.bets[face];
        }
        this.funds += winnings;
        console.log(`\twinnings: ${this.winnings}`);
    };

    fundLimit = function () {
        return this.funds > 0 && this.funds < 100;
    };
    brokeOrWon = function () {
        return this.funds >= 100;
    }

    rand = function (m, n) {
        return Math.floor(Math.random() * (n - m + 1));
    }
}

class Face {
    constructor() {
        this.squares = ["crown", "anchor", "heart", "club", "spade", "diamond"];
    }
    randFace = function () {
        let id = Math.floor(Math.random() * (this.squares.length + 1));
        return this.squares[num];
    }
}