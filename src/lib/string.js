
const KEY_OFFSET = 1000

export const keyify = line => line.split('')
  .reduce((acc, char, index) => acc + char.charCodeAt(0) + (index * KEY_OFFSET))
