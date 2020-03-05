function rot13 (...args) {
  let decodedStr = ''
  const encodedStr = args[0]

  for (let i = 0; i < encodedStr.length; i++) {
    const charCode = encodedStr.charCodeAt(i)
    decodedStr += getDecodedRot13Code(charCode, 13)
  }
  return decodedStr
}

function getDecodedRot13Code (val, amount) {
  let op
  if (val >= 65 && val <= 90) {
    op = String.fromCharCode(((val - 65 + amount) % 26) + 65)
  } else if (val >= 97 && val <= 122) {
    op = String.fromCharCode(((val - 97 + amount) % 26) + 97)
  } else {
    op = String.fromCharCode(val)
  }

  return op
}

export {
  rot13
}
