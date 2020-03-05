function abbreviateString (str) {
  const splitStr = str.split(' ')
  const firstStr = splitStr[0].charAt(0).toUpperCase() + splitStr[0].slice(1)
  const splitStrLength = splitStr.length

  return (splitStrLength === 1 ? firstStr : firstStr + ' ' + splitStr[splitStrLength - 1].charAt(0).toUpperCase() + '.')
}

export { abbreviateString }
