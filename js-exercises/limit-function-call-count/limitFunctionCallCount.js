const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return function (...args) {
    if (count < n) {
      count++;
      return cb(...args);
    }
    return null;
  };
};


export {
  limitFunctionCallCount,
};
