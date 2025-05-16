import { determineWinner} from "../src/lib/gameLogic.js";
import { updateStats } from "../src/lib/gameLogic.js";
import { gameState } from "../src/lib/state.js";

test("determineWinner correctly identifies winner", () => {
  expect(determineWinner("rock", "scissors")).toBe("win");
  expect(determineWinner("rock", "paper")).toBe("lose");
  expect(determineWinner("rock", "rock")).toBe("tie");
});

test("update the stats after a game", () => {

})