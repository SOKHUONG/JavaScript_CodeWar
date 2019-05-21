function whoIsNext(names, r){
while(r>names.length) r=Math.floor((r-names.length+1)/2);return names[r-1];
}
