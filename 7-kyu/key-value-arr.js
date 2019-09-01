function keysAndValues(data){
    keysArr = [];
    valuesArr = [];
    
    for ([key, value] of Object.entries(data)) {
      keysArr.push(key);
      valuesArr.push(value);
    }
    
    return [keysArr,valuesArr];
}


/*
Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

*/