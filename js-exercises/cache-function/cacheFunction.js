function cacheFunction(cb) {
  const prevArgs = new Set();

  return function (arg) {
    if (!prevArgs.has(arg)) {
      prevArgs.add(arg);
      return cb(arg);
    }
    return null;
  };
}


export {
  cacheFunction,
};
