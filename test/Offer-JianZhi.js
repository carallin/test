//offer-03
var arr=[[1,2,8],[2,4,9],[4,7,10]];
var rows=3,cols=3,num=7;
console.log(fun(arr,rows,cols,num));

function fun(arr,rows,cols,num) {
  var row=0,col=cols-1;
  var cur=arr[0][col];
  while (row<rows && col>=0) {
    cur=arr[row][col];
    if (cur>num) {
      col--;
    }else if (cur<num) {
      row++;
    }else {
      return [row,col];
    }
  }
  return 'no such num';
}

//offer-03-2 用一维数组来存储二维数组，仿照C++
var arr=[1,2,8,2,4,9,4,7,10];
var rows=3,cols=3,num=5;
console.log(fun(arr,rows,cols,num));

function fun(arr,rows,cols,num) {
  var row=0,col=cols-1;
  var cur=arr[col];
  while (row<rows && col>=0) {
    cur=arr[row*rows+col];
    if (cur>num) {
      col--;
    }else if (cur<num) {
      row++;
    }else {
      return [row,col];
    }
  }
  return 'no such num';
}
