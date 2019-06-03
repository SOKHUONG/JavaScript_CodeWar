function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  var a = dna.split("")
  for(i=0; i<a.length; i++)
    {
      if(a[i]=="T")
      a[i] = "U";
    }
    return a.join("");
    
  }