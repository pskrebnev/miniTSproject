class Accordeon {
  public readonly first: string;
  public readonly last: string;
  private _score: number = 0;
  constructor(first: string, last: string, score: number) {
    this.first = first;
    this.last = last;
    this._score = score + 1;
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}

const accordeon1 = new Accordeon("John", "Doe", 4);
console.log(accordeon1.first + " -> " + accordeon1.last + " -> ");
console.log(accordeon1.fullName);
accordeon1.score = 88;
