class Player {
  #score = 0;
  taunt(phrase: string) {
    console.log(phrase);
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this.#score = newScore;
  }
}

const player1 = new Player();
console.log(player1.taunt("Hello! Player!!"));
player1.score = 78;
console.log(player1.score);
