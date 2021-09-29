const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const getRandomIntInclusvie = (min: number, max: number) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);

  return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
};

export default async (msMin = 500, msMax = 1000) => {
  const ms = getRandomIntInclusvie(msMin, msMax);
  await sleep(ms);
};
