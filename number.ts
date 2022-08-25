/**
 * @param value number to format
 * @param precision number of decimal places
 * @returns formatted number
 */
export function round(value: number, precision: number = 0) {
  var multiplier = Math.pow(10, precision)
  return Math.round(value * multiplier) / multiplier
}
