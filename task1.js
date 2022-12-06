function numberOfPairs(gloves)
{
  let obj = {};
  let res = 0;
  for(let i=0; i < gloves.length; i++) {
    obj[gloves[i]] ? obj[gloves[i]]++ : obj[gloves[i]] = 1;
  }
  Object.keys(obj).forEach(el => res += Math.floor(obj[el]/2));
  return res;
}
