const input = await Deno.readTextFile("./input.txt");

const totalIntervals = input.split("\n").length;
const result = 0;

const nonOverlappingIntervals = input
  .split("\n")
  .map((schedule) => {
    const [first, second] = schedule.split(",");

    const firstElfSchedule = first.split("-").map((hour) => parseInt(hour));
    const secondElfSchedule = second.split("-").map((hour) => parseInt(hour));

    return secondElfSchedule[0] > firstElfSchedule[1] ||
      secondElfSchedule[1] < firstElfSchedule[0]
      ? 1
      : 0;
  })
  .reduce((a: number, b: number) => a + b, result);

console.log(totalIntervals - nonOverlappingIntervals);
