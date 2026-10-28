function fizzBuzz(angka){
  if(angka % 15 == 0){
    return "FizzBuzz";
  } else if(angka % 3 == 0){
    return "Fizz";
  } else if(angka % 5 == 0){
    return "Buzz";
  } else {
    return angka;
  }
}
function cekGenapGanjil(angka){
  if(angka % 2 == 0){
    return "Genap";
  } else {
    return "Ganjil";
  }
}
function balikString(teks){
  let hasil = "";
  for(let i = teks.length - 1; i >= 0; i--){
    hasil += teks[i];
  }
  return hasil;
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(7));

console.log(cekGenapGanjil(4));
console.log(cekGenapGanjil(7));

console.log(balikString("halo"));