var summation = function a(num) {
  if(num==0)
   return num;
   else 
   return num + a(num-1);

}