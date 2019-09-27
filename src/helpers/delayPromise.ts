export function delayPromise(payload: any, delay: number = 500): Promise<any> {
  return new Promise((resolve) => setTimeout(() => resolve(payload), delay));
}
