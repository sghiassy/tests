var createIntervalTree = require("interval-tree-1d")

//Create some random list of intervals
var intervals = [ [1, 2], [-1, 0], [0.5, 1], [-10, 10] ]

//Build tree
var tree = createIntervalTree(intervals)

//Find all intervals containing query point 0.7
console.log("querying point:", 0.7)
tree.queryPoint(0.7, function(interval) {
  console.log(interval)
})
