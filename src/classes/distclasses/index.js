"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _PlayerTS_score, _PlayerTS_numLives;
class PlayerTS {
    constructor(first, last) {
        _PlayerTS_score.set(this, 0);
        _PlayerTS_numLives.set(this, 10);
        this.first = first;
        this.last = last;
    }
    taunt(phrase) {
        console.log(phrase);
    }
    get score() {
        return __classPrivateFieldGet(this, _PlayerTS_score, "f");
    }
    static randomPlayer() {
        return new PlayerTS("", "");
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        __classPrivateFieldSet(this, _PlayerTS_score, newScore, "f");
    }
}
_PlayerTS_score = new WeakMap(), _PlayerTS_numLives = new WeakMap();
PlayerTS.description = "Playing in the game";
class AdminPlayer extends PlayerTS {
    constructor(first, last, powers) {
        super(first, last);
        this.isAdmin = true;
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
