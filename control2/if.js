// const temperature = 16
// if(temperature <20){
//     console.log("it's really cold");
    
// }else{
//     console.log("it's really HOt")
// }

// console.log("Pw skills");

let score=110;  
let life = 3;
let bullets=1000;
console.log('Welcome to PW game');

if (score>99) {
    console.log("you gained a life");
    score=score-100
    life=life+1
    let bullets=2000;
    console.log(`Your bullets are ${bullets}`);
    
}else{
    console.log("you can't gained a life");
}
console.log(`your score is ${score} and my life is ${life} and bullets are ${bullets}`)

