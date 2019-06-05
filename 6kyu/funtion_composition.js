function compose(f,g) {
  // Compose the two functions here!
  return function(){
return f.call(this, g.apply(this,arguments));

}
}
