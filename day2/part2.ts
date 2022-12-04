interface GameMoves {
  theyPlayed: string;
  outcome: string;
}

const getRoundScore = (moveOutcome: string): number => {
  switch (moveOutcome) {
    case "X":
      return 0;
    case "Y":
      return 3;
    case "Z":
      return 6;

    default:
      return 0;
  }
};

const getMoveScore = (move: string): number => {
  switch (move) {
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

const getScoreOfMyMove = (move: GameMoves): number => {
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

  const drawsTo = {
    A: "X",
    B: "Y",
    C: "Z",
  };

  switch (move.outcome) {
    case "X":
      switch (move.theyPlayed) {
        case "A":
          return getMoveScore(losesTo.A);
        case "B":
          return getMoveScore(losesTo.B);
        case "C":
          return getMoveScore(losesTo.C);
        default:
          return 0;
      }
    case "Y":
      switch (move.theyPlayed) {
        case "A":
          return getMoveScore(drawsTo.A);
        case "B":
          return getMoveScore(drawsTo.B);
        case "C":
          return getMoveScore(drawsTo.C);
        default:
          return 0;
      }
    case "Z":
      switch (move.theyPlayed) {
        case "A":
          return getMoveScore(winsTo.A);
        case "B":
          return getMoveScore(winsTo.B);
        case "C":
          return getMoveScore(winsTo.C);
        default:
          return 0;
      }
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
        outcome: temp[1],
      };
      return getRoundScore(move.outcome) + getScoreOfMyMove(move);
    })
    .reduce((a, b) => {
      return a + b;
    }, totalScore);

const totalScore = 0;
const input = await Deno.readTextFile("./input.txt");

console.log(calculateGameScore(input));
