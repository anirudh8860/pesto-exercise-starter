const argsString = (message, args) => {
  let pos = 0; let opMessage = ''
  const splitMessage = message.split(' ')

  for (const i in splitMessage) {
    const temp = (splitMessage[i].includes('{}') ? splitMessage[i].replace('{}', args[pos++]) : splitMessage[i])
    opMessage += (i == splitMessage.length - 1 ? temp : temp + ' ')
  }
  return opMessage
}

export { argsString }
