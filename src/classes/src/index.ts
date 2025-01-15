class PlayerTS {
  static description = "Playing in the game";
  #score = 0;
  #numLives = 10;
  first: string;
  last: string;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
  taunt(phrase: string) {
    console.log(phrase);
  }

  get score() {
    return this.#score;
  }

  static randomPlayer() {
    return new PlayerTS("", "");
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this.#score = newScore;
  }
}

class AdminPlayer extends PlayerTS {
  isAdmin = true;
  powers: string[];
  constructor(first: string, last: string, powers: string[]) {
    super(first, last);
    this.powers = powers;
  }
}

const player1 = new PlayerTS("John", "Doe");
console.log(player1.taunt("Hello! Player!!"));
console.log(player1.first + " -> " + player1.last);
player1.score = 78;
console.log(player1.score);
const adminPlayer1 = new AdminPlayer("AdminF", "AdminL", ["ban", "edit"]);
console.log(adminPlayer1.taunt("Hello! Admin Player!!"));
console.log(adminPlayer1.first + " -> " + adminPlayer1.last);
console.log(typeof adminPlayer1);
