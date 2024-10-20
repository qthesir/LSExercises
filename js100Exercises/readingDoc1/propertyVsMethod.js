// What are the return values of the statements on lines 3 to 5? Refer to the
// MDN documentation about the Array object for help.

let trees = ["birch", "pine", "sequoia", "palm tree"];

trees[trees.length - 1];
trees.pop();
trees[trees.length - 1];

// Trees.length - 1 is accessing the last element in an array, since arrays are indexed to
// 0. The .pop() method is mutating the array, removing the last element. Therefore,
// the first trees[trees.length - 1] statement will return 'palm tree', trees.pop() will
// return 'palm tree', and the second trees[trees.length - 1] will return 'sequoia,
// because the 'palm tree' was removed by the previous line.
