const rotatedString = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  } else if (str1.localeCompare(str2) === 0) {
    return false
  } else {
    const concat = str1 + str1
    return concat.includes(str2)
  }
}

export { rotatedString }
