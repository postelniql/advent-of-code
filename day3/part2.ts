const input = await Deno.readTextFile("./input.txt");
const arr = input.split("\n");
const elvesTriplets = arr
  .map((_, index) => {
    return index % 3 === 0 ? arr.slice(index, index + 3) : null;
  })
  .filter((triplet) => {
    return triplet;
  });

console.log("elves triplets are: ", elvesTriplets);

const totalPriorities = 0;

const calculatePriority = (itemType: string): number => {
  const asciiValue = itemType.charCodeAt(0);
  return asciiValue < 91 ? asciiValue - 38 : asciiValue - 96;
};

const findBadge = (first: string, second: string, third: string): string => {
  const lettersFirst = new Set(first.split(""));
  const lettersSecond = new Set(second.split(""));
  const lettersThird = new Set(third.split(""));
  const commonItem = new Set(
    [...lettersFirst].filter(
      (letter) => lettersSecond.has(letter) && lettersThird.has(letter)
    )
  );
  return commonItem.values().next().value;
};

const priorities = elvesTriplets
  .map((triplet) => {
    console.log("triplet is: ", triplet);
    const [firstElf, secondElf, thirdElf] = triplet;

    const badgeType = findBadge(firstElf, secondElf, thirdElf);
    return calculatePriority(badgeType);
  })
  .reduce((a, b) => {
    return a + b;
  }, totalPriorities);

console.log(priorities);
