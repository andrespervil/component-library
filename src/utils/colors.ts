/**
 *
 * Calculate a Darker or Lighter RGB color, based on the HEX recieved
 *
 * @param color 'Hexadecimal color'
 * @param percentage '>100 for lighter, <100 for darker'
 * @returns 'RGB color
 *
 * @example
 * ```
 *  const color = '#90ffe2';
 *
 *  const darkerColor = calculateColor(color, 50);
    // darkerColor = 'rgb(72,127.5,113)'
 *
 *  cont lighterColor = calculateColor(color, 150)
    // lighterColor = 'rgb(216,382.5,339)'
 *
 * ```
 */

export const calculateColor = (color: string, percentage: number) => {
  var red = parseInt(color[1] + color[2], 16) * (percentage / 100)
  var green = parseInt(color[3] + color[4], 16) * (percentage / 100)
  var blue = parseInt(color[5] + color[6], 16) * (percentage / 100)

  return 'rgb(' + red + ',' + green + ',' + blue + ')'
}
