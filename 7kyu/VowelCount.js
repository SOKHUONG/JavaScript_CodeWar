function getCount(str) {
  var vowelsCount = 0;
  var a = str.split('');
  for(var i=0; i<str.length; i++)
    {
      if(a[i]=='a'|| a[i]=='i' || a[i]=='o' || a[i]=='u' || a[i]=='e')
        vowelsCount++;
    }
  
  return vowelsCount;
}