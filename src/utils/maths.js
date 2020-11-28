export const displayBigNums = (num) => {
  if (num > 1000000) {
    return `${(num / 1000000).toFixed(1)}M`
  } else if (num < 1000000 && num > 1000) {
    return `${(num / 1000).toFixed(1)}K`
  } else {
    return `${num}`
  }
}

export const displaySmallNums = (num, str) => {
  if (num === 1) {
    return `${num} ${str}`
  } else {
    return `${num} ${str}s`
  }
}
