/**
 * Sleeps for a number of milliseconds.
 * @param ms Number of ms to sleep.
 * @returns a promise that resolves after the number of ms.
 */
export const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms)
    })
  }


 /**
 * Adds "0x" to the start of a string if necessary.
 * @param str String to modify.
 * @returns the string with "0x".
 */
export const add0x = (str: string): string => {
  if (str === undefined) {
    return str
  }
  return str.startsWith('0x') ? str : '0x' + str
}
