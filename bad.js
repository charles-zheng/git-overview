// this shows why js is stupid
var x = 0;

for(i=0; i<=10; i++) {
  if(i === 7) {
    x += "!";
  } else {
    x += 1;
  }
}

alert(x);
