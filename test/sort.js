// 归并排序
var arr =[2,5,2,1,4,6,8,9,7,16,23,12,7],//[1,3,5,2,4,5],// [2,5,2,1,4,6,8,9,7,16,23,12,7],
    len = arr.length;
console.log(arr);
console.log(mergeSort(arr,0,len-1));

function merge(arr,low,mid,high) {
  var temp=[];
  for (var i = low; i <= high; i++) {
    temp[i]=arr[i];
  }
  var j=low,k=mid+1;
  for (i = low; i <= high; i++) {
    if (j>mid) {
      arr[i]=temp[k++];
    }else if (k>high) {
      arr[i]=temp[j++];
    }else if (temp[j]<=temp[k]) {
      arr[i]=temp[j++];
    }else {
      arr[i]=temp[k++];
    }
  }
  return arr;
}
function mergeSort(arr,low,high) {
  var mid;
  if (low>=high) {
    return arr;
  }else {
    mid=Math.floor((low+high)/2);
    mergeSort(arr,low,mid);
    mergeSort(arr,mid+1,high);
    return merge(arr,low,mid,high);
  }
}


//希尔排序
console.log(fun([2,5,3,6,7,4,9,2,5,21,34,66,78,32,14]));

function fun(arr) {
  var gap=Math.floor(arr.length/3);//此处的3可以换做其他数，如2，3,4
  var key=arr[0];
  while (gap > 0) {
    console.log(gap);
    for (var i = 0; i < gap; i++) {
      for (var j = i; j < arr.length-gap; j=j+gap) {
        key=arr[j+gap];
        while (key<arr[j]&&j>0) {
          arr[j+gap]=arr[j];
          j=j-gap;
        }
        arr[j+gap]=key;
      }
    }
    gap=Math.floor(gap/2);
  }
  return arr;
}


//选择排序
function selectSort(arr) {
  var min,temp;
  for (var i = 0; i < arr.length; i++) {
    min=i;
    for (var j = i; j < arr.length; j++) {
      if (arr[min]>arr[j]) {
        min=j;
      }
    }
    temp = arr[min];
    arr[min]=arr[i];
    arr[i]=temp;
    console.log(arr.join(','));
  }
  return arr;
}

//成功
function insertSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var key=arr[i];
    for (var j = i-1;j >= 0 && arr[j] > key;j--) {
        arr[j+1] = arr[j];
      }
    arr[j+1] = key;
    }
  return arr;
}
console.log(sort([2,11,4,14,1,5,3]));


//成功
function insertSort(arr) {
  for (var i = 1,len = arr.length; i < len; i++) {
    var key = arr[i];
    var j = i - 1;
    while (arr[j] > key && j >= 0) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = key;
  }
  return arr;
}
console.log(insertSort([2,3,1,14,8,4,5,2,4,13]));
