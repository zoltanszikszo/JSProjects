const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

console.log(justCoolStuff(myStuff, coolStuff))