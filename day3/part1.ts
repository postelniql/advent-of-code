const input = await Deno.readTextFile("./input.txt");

const totalPriorities = 0;

const calculatePriority = (itemType: string): number => {
  const asciiValue = itemType.charCodeAt(0);
  return asciiValue < 91 ? asciiValue - 38 : asciiValue - 96;
};

const findCommonItem = (first: string, second: string): string => {
  const lettersFirst = new Set(first.split(""));
  const lettersSecond = new Set(second.split(""));
  const commonItem = new Set(
    [...lettersFirst].filter((letter) => lettersSecond.has(letter))
  );
  return commonItem.values().next().value;
};

const priorities = input
  .split("\n")
  .map((line) => {
    const firstItem = line.substring(0, line.length / 2);
    const secondItem = line.substring(line.length / 2, line.length);
    const commonItemType = findCommonItem(firstItem, secondItem);
    return calculatePriority(commonItemType);
  })
  .reduce((a, b) => {
    return a + b;
  }, totalPriorities);

console.log(priorities);
