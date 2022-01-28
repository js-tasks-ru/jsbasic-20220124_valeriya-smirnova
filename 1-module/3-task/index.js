function ucFirst(str) {
  let str = 'вася'
  if (!str) return str;

  console.log(str[0])

  return str[0].toUpperCase() + str.slice(1);
}
