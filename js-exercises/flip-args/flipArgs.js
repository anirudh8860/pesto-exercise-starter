function flipArgs(...args) {
  let index = 0;
  const reverseArgs = [];

  for (let i = args.length - 1; i >= 0; i--) {
    reverseArgs[index++] = args[i];
  }
  return reverseArgs;
}

export {
  flipArgs,
};
