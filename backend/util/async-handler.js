// reference from https://github.com/Abazhenov/express-async-handler

const asyncUtil = fn => function asyncUtilWrap(...args) {
  const fnReturn = fn(...args)
  const next = args[args.length-1]
  return Promise.resolve(fnReturn).catch(next)
}

module.exports = asyncUtil