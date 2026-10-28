function cekNilai(nilai){
  if(nilai >= 75){
    return "Lulus";
  }else{
    return "Remedial";
  }
}

function konversiRole(kode){
  switch(kode){
    case "A":
      return "Admin";
    case "U":
      return "User";
    default:
      return "Guest";
  }
}

console.log(cekNilai(80));
console.log(cekNilai(70));
console.log(konversiRole("A"));
console.log(konversiRole("U"));
console.log(konversiRole("B"));