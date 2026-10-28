for(let i = 1; i <= 4; i++){
  let s = "";
  for(let j = 1; j <= i; j++){
    s += "*";
  }
  console.log(s);
}

console.log("");

for(let i = 1; i <= 4; i++){
  console.log("********");
}

console.log("");

for(let i = 1; i <= 4; i++){
  if(i == 1 || i == 4){
    console.log("********");
  } else {
    console.log("*      *");
  }
}

console.log("");

for(let i = 1; i <= 4; i++){
  let s = "";
  for(let j = 1; j <= i; j++){
    s += i;
  }
  console.log(s);
}

console.log("");

let angka = 1;
for(let i = 1; i <= 4; i++){
  let s = "";
  for(let j = 1; j <= i; j++){
    s += angka;
    angka++;
  }
  console.log(s);
}

console.log("");

let n = 4;
for(let i = 1; i <= n; i++){
  let sp = "";
  for(let k = 1; k <= n - i; k++) sp += " ";
  let b = "";
  for(let j = 1; j <= 2*i-1; j++) b += "*";
  console.log(sp + b);
}
for(let i = n-1; i >= 1; i--){
  let sp = "";
  for(let k = 1; k <= n - i; k++) sp += " ";
  let b = "";
  for(let j = 1; j <= 2*i-1; j++) b += "*";
  console.log(sp + b);
}

console.log("");

for(let i = 5; i >= 1; i--){
  let s = "";
  for(let j = 1; j <= i; j++) s += "*";
  console.log(s);
}
for(let i = 2; i <= 5; i++){
  let s = "";
  for(let j = 1; j <= i; j++) s += "*";
  console.log(s);
}

console.log("");

for(let i = 1; i <= 5; i++){
  let s = "";
  for(let j = 1; j <= 2*5-1; j++){
    if(j == 5-i+1 || j == 5+i-1 || i == 5){
      s += "*";
    } else {
      s += " ";
    }
  }
  console.log(s);
}