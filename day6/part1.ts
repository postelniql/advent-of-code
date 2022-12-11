const input = await Deno.readTextFile("./input.txt");

const correctData = (input: string): boolean => {
  const letters = new Set(input.split(""));
  return letters.size === 4;
};

let left = 0;
let right = 4;

while (right < input.length) {
  if (correctData(input.substring(left, right))) break;
  else {
    left++;
    right++;
  }
}

console.log("first start-of-packet marker is: ", right);
