function countPrimeNumbers() {
    var startTime = performance.now();
    var count = 0;
  }
  
  var totalTime = 0;
  
  for (var i = 0; i < 100; i++) {
    var startTime = performance.now();
    countPrimeNumbers();
    var endTime = performance.now();
    var elapsedTime = endTime - startTime;
    totalTime += elapsedTime;
  }
  
  console.log("Execution time of calculating prime numbers 100 times was " + totalTime.toFixed(3) + " milliseconds.");