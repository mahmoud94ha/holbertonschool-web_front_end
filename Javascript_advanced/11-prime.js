function countPrimeNumbers() {
    var startTime = performance.now();
    var count = 0;
  }
  
  function measureExecutionTime() {
    let startTime = performance.now();
  
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        if (i === 99) {
          countPrimeNumbers();
          let endTime = performance.now();
          let executionTime = endTime - startTime;
          console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);
        } else {
          countPrimeNumbers();
        }
      });
    }
  }
  
  measureExecutionTime();