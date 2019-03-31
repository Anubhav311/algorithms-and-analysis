function longestString(arr) {
    let str = arr[0];
    for(i=0; i<arr.length; i++) {
      if(str.length < arr[i].length) {
        str = arr[i];
      }
    }
    return str;
  }