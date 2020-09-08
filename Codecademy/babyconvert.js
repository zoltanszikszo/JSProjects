const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

const convertToBaby = arr =>{
    let babyAnimals = [];
    for (let i = 0; i < arr.length; i++) {
        babyAnimals.push("baby" + arr[i]);
    }
    return babyAnimals;
}

console.log(convertToBaby(animals));