function findUniq(arr) {
    var a =arr.sort((a,b)=> a-b);
    var b=[];
     if(a[0]==a[1])
     {
       b = a.reverse();
       return b[0];
     }
     else
       return a[0];
}