function countPrimeNumbers() {
    var startTime = performance.now();
    var count = 0;
  
    // Helper function to check if a number is prime
    function isPrime(number) {
      if (number < 2) {
        return false;
      }
  
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return false;
        }
      }
  
      return true;
    }
  
    // Loop from 2 to 100 and count prime numbers
    for (var i = 2; i <= 100; i++) {
      if (isPrime(i)) {
        count++;
      }
    }
  
    var endTime = performance.now();
    var executionTime = endTime - startTime;
  
    console.log("Execution time of printing countPrimeNumbers was " + executionTime + " milliseconds.");
  
    return count;
  }
  
  countPrimeNumbers();