let growingKeys = (num,str) => {
  if(typeof(str)!=='string') return 'invalid string';
  if(typeof(num)!=='number') return 'invalid number'
  if(num<=0) return 'false';
  let growingObj = {};
  let growingStr = str;
  for (let i = 0; i < num; i++) {
    if(i==0){
      growingObj[growingStr] = true
    } else if(i>0){
        growingStr = growingStr.concat(str)
        growingObj[growingStr] = true
    }
  }
  return growingObj
}

module.exports = growingKeys
