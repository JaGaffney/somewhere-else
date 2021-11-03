export const enumFromValue = <T extends Record<string, string>>(
  val: string,
  _enum: T
) => {
  const enumName = (Object.keys(_enum) as Array<keyof T>).find(
    k => _enum[k] === val
  )
  if (!enumName) {
    console.log("Invalid Rarity for: " + val)
    return
  }
  return _enum[enumName]
}
