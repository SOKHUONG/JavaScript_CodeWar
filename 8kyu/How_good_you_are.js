function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((sum,x)=> sum + x )<yourPoints * classPoints.length; 
  }
