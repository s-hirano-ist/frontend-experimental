export const sleepMs = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));
