const input = await Deno.readTextFile("./input.txt");

const correctData = (input: string): boolean => {
  const letters = new Set(input.split(""));
  return letters.size === 14;
};

let left = 0;
let right = 14;

while (right < input.length) {
  if (correctData(input.substring(left, right))) break;
  else {
    left++;
    right++;
  }
}

console.log("first start-of-packet marker is: ", right);
