function customForEach (arr, cb) {
  for (const i in arr) {
    cb(arr[i], i, arr)
  }
}

function customMap (arr, cb) {
  const op = []; let i = 0
  while (i < arr.length) {
    const mappedVal = cb(arr[i], i, arr)
    op[i] = mappedVal
    i++
  }
  return op
}

function customFilter (arr, cb) {
  const op = []; let i = 0; let j = 0
  while (i < arr.length) {
    const mappedVal = cb(arr[i], i, arr)
    if (mappedVal) { op[j++] = arr[i] }

    i++
  }
  return op
}

function customReduce (arr, cb, initValue) {
  let i = 0
  let accumulator = (initValue || arr[i++])
  while (i < arr.length) {
    accumulator = cb(arr[i], accumulator, arr)
    i++
  }
  return accumulator
}

export {
  customForEach,
  customMap,
  customFilter,
  customReduce
}
