function enough(cap, on, wait) {
    // your code here
    var no = cap - on - wait;
    if(no>=0) return 0;
    else return -no;
   
