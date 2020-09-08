const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

const greetAliens = arr =>{
    for (let i = 0; i < aliens.length; i++) {
        console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`);        
    }
}

greetAliens();