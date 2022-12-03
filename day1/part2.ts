import { BinaryHeap } from "https://deno.land/x/collections@v0.11.1/mod.ts";

const maxHeap: BinaryHeap<number> = new BinaryHeap();

const input = await Deno.readTextFile("./input.txt");

let currentMax = -1;
let currentSum = 0;

input.split(/\r?\n/).forEach((line) => {
  if (isNaN(parseInt(line))) {
    maxHeap.push(currentSum);
    currentMax = Math.max(currentMax, currentSum);
    currentSum = 0;
  } else {
    currentSum += parseInt(line);
  }
});

console.log("result is: ", maxHeap.pop() + maxHeap.pop() + maxHeap.pop());
