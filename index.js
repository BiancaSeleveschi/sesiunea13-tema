//a. Scrie o functie care numara cate numere divizibile cu 7 se afla in intervalul x,y si returneaza valoarea.
function computeDivisibleWith7No(x, y) {
  let contor = 0;
  let i = x;
  while (i <= y) {
    if (i % 7 == 0) {
      contor++;
    }
    i++;
  }
  return contor;
}
console.log('Numerele divizibile cu 7 sunt in total ', computeDivisibleWith7No(5, 23))


// b.Scrie o functie care afiseaza toate numerele prime din intervalul x,y (Se va folosi o alta functie pt a verifica daca un nr este prim)
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  let i = 2;
  while (i < n) {
    if (n % i == 0) {
      return false;
    }
    i++;
  }
  return true;
}
console.log('Numarul este prim: ', isPrime(11))
console.log('Numarul este prim: ', isPrime(12))

function displayPrimeNo(x, y) {
  let n = x;
  if (n < 2) {
    return false;
  }
  console.log('Numerele prime sunt: ')
  while (n <= y) {
    if (isPrime(n)) {
      console.log(n);
    }
    n++;
  }
}
displayPrimeNo(3, 9)


// c.Scrie o functie care gaseste minimul intr-un array si returneaza rezultatul
function getMin(array) {
  let min = array[0];
  let i = 0;
  while (i < array.length) {
    if (array[i] < min) {
      min = array[i]
    }
    i++;
  }
  return min;
}
console.log('Cel mai mic numar este ', getMin([55, 23, 2, 3, 7]))


// d.Scrie o functie care calculeaza suma elementelor pare dintr-un array si returneaza rezultatul
function computeSumEvenNo(array) {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    if (array[i] % 2 == 0) {
      sum += array[i];
    }
    i++;
  }
  return sum;
}
console.log('Suma numerelor pare este ', computeSumEvenNo([3, 5, 4, 6, 2, 7]))


// e.Scrie o functie care parcurge numerele de la 1 la 100 si pentru fiecare nr divizibil cu 3 afiseaza fizz, pt fiecare nr divizibil cu 5 afiseaza buzz si pentru fiecare nr divizibil cu 3 si cu 5 afiseaza FizzBuzz
function displayDivWith3Or5No(n) {
  let i = 1;
  while (i < n) {
    if (i % 3 == 0 && i % 5 !== 0) {
      console.log('fizz')
    }
    if (i % 5 == 0 && i % 3 !== 0) {
      console.log('buzz')
    }
    if (i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz')
    }
    i++;
  }
}
displayDivWith3Or5No(100)


// f.Scrie o functie care afiseaza urmatorul pattern:
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
function displayStars(n) {
  let star = '';
  let i = 1;
  while (i <= n) {
    star += '*' + ' '
    console.log(star);
    i++;
  }
}
displayStars(5)


// g.Scrie o functie care caculeaza suma numerelor pare si suma numerelor impare dintr-un array. Din cele 2 valori (sume) se va construi un array cu 2 elemente care va fi returnat
function computeSumEvenAndOddNo(array) {
  let sum1 = 0;
  let sum2 = 0;
  let i = 0;
  let arr = []
  while (i < array.length) {
    if (array[i] % 2 == 0) {
      sum1 += array[i]
    }
    if (array[i] % 2 !== 0) {
      sum2 += array[i]
    }
    arr = [sum1, sum2]
    i++;
  }
  return arr;
}
console.log(computeSumEvenAndOddNo([3, 5, 2, 4, 1]))


// h.Scrie o functie care returneaza un array cu cifrele pare dintr-un numar.
function displayEvenNo(n) {
  let arr = []
  let i = 0;
  while (n > 0) {
    if ((n % 10) % 2 == 0) {
      arr[i] = n % 10;
      i++;
    }
    n = Math.floor(n / 10)
  }
  return arr;
}
console.log(displayEvenNo(349865))


// i.Scrie o functie care verifica daca un array are cel putin un element mai mare ca 100
function verifyNoOfArray(array) {
  let i = 0;
  while (i < array.length) {
    if (array[i] > 100) {
      return true
    }
    i++;
  }
  return false;
}
console.log('Array-ul are cel putin un element mai mare decat 100: ', verifyNoOfArray([2, 5, 44, 102, 155, 3]))


// j.Scrie o functie care afiseaza primele n numere din seria Fibonacci (pt seria Fibonacci primele 2 numere sunt: n1=0 si n2=1)
function displayNFibonacciNo(n) {
  let n1 = 0;
  let n2 = 1;
  if (n == 0) {
    console.log(n1)
  }
  if (n == 1) {
    console.log(n2)
  }
  let i = 1;
  let res = 0;
  while (i <= n) {
    console.log(n1)
    res = n1 + n2;
    n1 = n2;
    n2 = res;
    i++;
  }
}
displayNFibonacciNo(3);


// k.Scrie o functie care verifica daca numarul n apare in seria Fibonacci  (pt seria Fibonacci primele 2 numere sunt: n1=0 si n2=1)
function verifyNIsFinNo1(n, fib) {
  let n1 = 0;
  let n2 = 1;
  if (n == 0) {
    return true;
  }
  if (n == 1) {
    return true;
  }
  let i = 1;
  while (i <= fib) {
    let temp = n1;
    n1 = n2;
    n2 = temp + n1;
    if (n == n1) {
      return true;
    }
    i++;
  }
  return false;
}
console.log(verifyNIsFinNo1(3, 8))
console.log(verifyNIsFinNo1(6, 8))
