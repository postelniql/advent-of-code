const input = await Deno.readTextFile("./input.txt");

const transpose = (a) => {
  return Object.keys(a[0]).map((c) => {
    return a.map((r) => {
      return r[c];
    });
  });
};

// turn input crates configuration matrix into row arrays
const configuration = input
  .split("\n")
  .slice(0, 8)
  .map((config) => {
    const configArr = config.split(" ").map((elem) => {
      if (elem.charAt(0) === "[") {
        return elem.split("")[1];
      } else return "";
    });
    const crateArr = new Array(9).fill("");
    let insertIndex = 0;
    let spaceCount = 0;
    while (configArr[spaceCount] !== undefined) {
      if (configArr[spaceCount] !== "") {
        crateArr[insertIndex] = configArr[spaceCount];
        spaceCount += 1;
      } else {
        spaceCount += 4;
      }

      insertIndex += 1;
    }
    return crateArr;
  });
const shipmentCrates = transpose(configuration).map((arr) =>
  arr.filter((element) => element !== "")
);

// extract numbers from instruction sentences
const instructions = input
  .split("\n")
  .slice(10)
  .map((instruction) =>
    instruction
      .split(" ")
      .filter((token) => Number.isInteger(parseInt(token)))
      .map((string) => parseInt(string))
  );

const moveCrates = (instruction: any, configuration: any) => {
  const [amount, sourceStack, targetStack] = instruction;

  const cratesToMove = configuration[sourceStack - 1].splice(0, amount);

  cratesToMove.forEach((e) => {
    configuration[targetStack - 1].unshift(e);
  });
};

instructions.forEach((instruction) => moveCrates(instruction, shipmentCrates));

let result = "";
shipmentCrates.forEach((column) => (result += column[0]));
console.log(result);
