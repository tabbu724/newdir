
var arr = process.argv;
var arrl= arr.length;
var sum = 0;
for (i = 2; i <= arrl - 1; i++){
  sum += Number(process.argv[i]);
}
console.log(sum);
