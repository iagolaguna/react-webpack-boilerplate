const { keys, pipe, match, prop, reduce, map, merge } = require('ramda')

const pathFactory = value => ({ [value]: value })

const transformPath = pipe(
  match(/(.*)\//),
  prop(1)
)

const mergePath = (acc, value) => pipe(
  pathFactory,
  merge(acc)
)(value) 

exports.createAlias = pipe(
 keys,
 map(transformPath),
 reduce(mergePath, {})
)
