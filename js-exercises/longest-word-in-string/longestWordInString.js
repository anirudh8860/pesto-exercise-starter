function longestWordInString (...args) {
  let op = 0
  const splitArgs = args[0].split(' ')

  for (const word of splitArgs) {
    op = (word.length > op ? word.length : op)
  }
  return op
}

export { longestWordInString }
