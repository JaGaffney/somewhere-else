export const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const costPerAction = (value: number): number => {
  let returnValue = 1
  switch (true) {
    case value === 1:
      return 0
    case value < 10:
      returnValue = value * 10
      break
    case value < 20:
      returnValue = value * 30
      break
    case value < 30:
      returnValue = value * 50
      break
    case value < 40:
      returnValue = value * 90
      break
    case value < 50:
      returnValue = value * 150
      break
    case value < 60:
      returnValue = value * 210
      break
    case value < 70:
      returnValue = value * 270
      break
    case value < 80:
      returnValue = value * 400
      break
    case value < 90:
      returnValue = value * 600
    case value > 91:
      returnValue = value * 1000
      break
    default:
      break
  }
  return returnValue
}

export const intToString = (num): string => {
  num = num.toString().replace(/[^0-9.]/g, "")
  if (num < 1000) {
    return num
  }
  let si = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" },
  ]
  let index
  for (index = si.length - 1; index > 0; index--) {
    if (num >= si[index].v) {
      break
    }
  }
  let retValue =
    (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
    si[index].s

  let tempRetValue = retValue.split(".")
  if (tempRetValue.length === 2) {
    let numberValue = tempRetValue[1].slice(-1)
    retValue = tempRetValue[0] + numberValue
  }

  return retValue
}
