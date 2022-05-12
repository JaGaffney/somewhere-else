export const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const costPerAction = (value: number): number => {
  let returnValue = 1
  switch (true) {
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
