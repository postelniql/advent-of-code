interface GameMoves {
  theyPlayed: string;
  iPlayed: string;
}

const getScoreOf = (playerMove: string): number => {
  switch (playerMove) {
    case "X":
      return 1;
    case "Y":
      return 2;
    case "Z":
      return 3;

    default:
      return 0;
  }
};

const getRoundScore = (move: GameMoves): number => {
  const winsTo = {
    A: "Y",
    B: "Z",
    C: "X",
  };

  const losesTo = {
    A: "Z",
    B: "X",
    C: "Y",
  };

  // TODO: replace this horrible logic with type magic
  switch (move.theyPlayed) {
    case "A":
      if (move.iPlayed === losesTo.A) {
        return 0;
      } else if (move.iPlayed === winsTo.A) {
        return 6;
      } else return 3;
    case "B":
      if (move.iPlayed === losesTo.B) {
        return 0;
      } else if (move.iPlayed === winsTo.B) {
        return 6;
      } else return 3;
    case "C":
      if (move.iPlayed === losesTo.C) {
        return 0;
      } else if (move.iPlayed === winsTo.C) {
        return 6;
      } else return 3;

    default:
      return 0;
  }
};

const calculateGameScore = (input: string) =>
  input
    .split(/\n/)
    .map((tuple) => {
      const temp = tuple.split(" ");
      const move: GameMoves = {
        theyPlayed: temp[0],
        iPlayed: temp[1],
      };
      return getScoreOf(move.iPlayed) + getRoundScore(move);
    })
    .reduce((a, b) => {
      return a + b;
    }, totalScore);

const totalScore = 0;
const input = await Deno.readTextFile("./input.txt");

console.log(calculateGameScore(input));
