function addBigIntegers (intString) {
  const intStringArr = intString.split('\n')
  let total = intStringArr[0]
  for (let i = 1; i < intStringArr.length; i++) {
    total = addTwoBigValues(total, intStringArr[i])
  }

  return total
}

function addTwoBigValues (val1, val2) {
  let sum = ''
  const val1len = val1.length
  const val2len = val2.length

  if (val1len < val2len) {
    const temp = val1
    val1 = val2
    val2 = temp
  }

  let carry = 0
  for (let i = 0; i < val1len; i++) {
    const a = parseInt(val1.charAt(val1len - i - 1))
    let b = parseInt(val2.charAt(val2len - i - 1))
    b = (b) || 0

    const temp = (carry + a + b).toString()
    const currSum = temp.charAt(temp.length - 1)

    carry = parseInt(temp.substr(0, temp.length - 1))
    carry = (carry) || 0

    sum = (i === val1len - 1) ? temp + sum : currSum + sum
  }

  return sum
}

export { addBigIntegers }
