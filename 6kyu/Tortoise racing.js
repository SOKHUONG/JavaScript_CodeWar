function race(v1, v2, g) {
    if(v1>=v2){
    return null;
    }else{
    var t = g/(v2-v1) ;
    var h = Math.trunc(t);
    var m = Math.trunc((t*60)%60);
    var s = Math.trunc((t*3600)%60);
    return [h,m,s];}
}