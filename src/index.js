
exports.min = function min (array) {
  if (array===undefined||array.length==0){
    return 0;
  }
  let mVal = array[0];
    for(let i = 1; i < array.length; i++) {
         let cur = array[i];
       if(cur < mVal) {
      mVal = cur;
    }
  }
  return mVal ;
}

exports.max = function max (array) {
  if (array===undefined||array.length==0){
    return 0;
  }
  let mVal = array[0];
    for(let i = 1; i < array.length; i++) {
         let cur = array[i];
       if(cur > mVal) {
      mVal = cur;
    }
}
  return mVal ;
}

exports.avg = function avg (array) {
  if (array===undefined||array.length==0){
    return 0;
  }
  let cur=0;
  for(let i = 0; i < array.length; i++) {
    cur += array[i];
  }
  return cur/array.length;
}