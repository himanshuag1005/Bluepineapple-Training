function grains(x,y)
{
  let total=1;
  n = 8(x-1)+y;

  for(let i=2; i<=block; i++) {
    total = total*2;
  }
  return [total , 2**(n-1)];
}
console.log(grains(3,1));

/*function grains(x,y)
{
  let n = 8*(x-1)+y;
  return 2**(n-1);
}
console.log(grains(3,1));*/