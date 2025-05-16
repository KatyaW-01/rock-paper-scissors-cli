import { determineWinner } from "../src/lib/gameLogic.js";

test("determineWinner correctly identifies winner", () => {
  expect(determineWinner("rock", "scissors")).toBe("win");
  expect(determineWinner("rock", "paper")).toBe("lose");
  expect(determineWinner("rock", "rock")).toBe("tie");
});