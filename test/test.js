// 腾讯笔试题1:判断num可以由几个质数的和。
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num%i === 0) {
      return false;
    }
  }
  return true;
};
function main(num) {
  var sum = 0;
  if (num % 2 !== 0) {
    sum = 0;
  }else {
    for (var i = 2; i <= num/2; i++) {
      var num2 = num - i;
      if (isPrime(num2)) {
        sum ++;
      }
    }
  }
  return sum;
}
console.log(main(10));

//腾讯笔试题2:6位编码，类似二分法
function code(num) {
  var codeArr=[];
  var start = -90, end = 90,mid = 0;
  for (var i = 0; i < 6; i++) {
    mid = Math.floor((start+end)/2);
    if (num < mid) {
      codeArr[i] = 0;
      end = mid;
    }else {
      codeArr[i] = 1;
      start = mid;
    }
  }
  return codeArr;
}
console.log(code(80).join(""));
console.log(typeof(code(80).join("")));
console.log(parseInt(code(-80).join("")));

//统计一个字符串中最多的字符个数
function maxChar(str){
    var obj = {};
    for(var i = 0, l = str.length,k; i < l ;i++){
        k = str.charAt(i);
        if(obj[k]){
            obj[k]++;
        }else{
            obj[k] = 1;
        }
    }
    console.log(obj);
    var m = 0,i=null;
    for(var k in obj){
        if(obj[k] > m){
            m = obj[k];
            i = k;
        }
    }
    return i + ':' + m;
}
