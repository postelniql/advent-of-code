const input = await Deno.readTextFile("./input.txt");

const result = 0;

const overlappingIntervals = input
  .split("\n")
  .map((schedule) => {
    const [first, second] = schedule.split(",");

    const firstElfSchedule = first.split("-").map((hour) => parseInt(hour));
    const secondElfSchedule = second.split("-").map((hour) => parseInt(hour));

    return (firstElfSchedule[0] <= secondElfSchedule[0] &&
      firstElfSchedule[1] >= secondElfSchedule[1]) ||
      (firstElfSchedule[0] >= secondElfSchedule[0] &&
        firstElfSchedule[1] <= secondElfSchedule[1])
      ? 1
      : 0;
  })
  .reduce((a: number, b: number) => a + b, result);

console.log(overlappingIntervals);
