const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

const findMyKeys = arr => arr.findIndex(item => item === 'keys')

console.log(findMyKeys(randomStuff));