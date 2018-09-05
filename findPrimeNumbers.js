for(var i = 0; i < 1000; i++) {
    function isPrime(element) {
      var start = 2;
      while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
          return false;
        }
      }
      return element > 1;
    }
    if(isPrime(i)) {
    console.log(i);
    }
};
