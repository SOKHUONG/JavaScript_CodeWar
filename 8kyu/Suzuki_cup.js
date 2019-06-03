function stairsIn20(s){
    //your code here
    var i =0,j=0,total = 0;
    for(i=0;i<7;i++)
    {
    for(j=0;j<52;j++)
    {
    total = total + s[i][j] ;
    }
    }
    return total*20;
    
    
  }
