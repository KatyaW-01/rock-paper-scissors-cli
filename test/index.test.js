import { determineWinner} from "../src/lib/gameLogic.js";
import { updateStats } from "../src/lib/gameLogic.js";
import { resetGame } from "../src/lib/gameLogic.js";

test("determineWinner correctly identifies winner", () => {
  expect(determineWinner("rock", "scissors")).toBe("win");
  expect(determineWinner("rock", "paper")).toBe("lose");
  expect(determineWinner("rock", "rock")).toBe("tie");
});

test("update the stats after a game", () => {
  const gameState = {
    stats: {
      wins: 0,
      losses: 0,
      ties: 0,
    },
    over: false,
  };

  updateStats("win",gameState)
  expect(gameState.stats.wins).toBe(1);
  expect(gameState.stats.losses).toBe(0);
  expect(gameState.stats.ties).toBe(0);

  updateStats("lose", gameState);
  expect(gameState.stats.wins).toBe(1);
  expect(gameState.stats.losses).toBe(1);
  expect(gameState.stats.ties).toBe(0);

  updateStats("tie", gameState);
  expect(gameState.stats.wins).toBe(1);
  expect(gameState.stats.losses).toBe(1);
  expect(gameState.stats.ties).toBe(1);
})

test("reset the game", () => {
  const gameState = {
    stats: {
      wins: 0,
      losses: 0,
      ties: 0,
    },
    over: false,
  };

  updateStats("win",gameState);
  updateStats("lose", gameState);
  expect(gameState.stats.wins).toBe(1);
  expect(gameState.stats.losses).toBe(1);
  expect(gameState.stats.ties).toBe(0);

  resetGame(gameState);
  expect(gameState.stats.wins).toBe(0);
  expect(gameState.stats.losses).toBe(0);
  expect(gameState.stats.ties).toBe(0);
})