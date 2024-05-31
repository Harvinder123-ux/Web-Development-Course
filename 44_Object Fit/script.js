console.log("Hello abhi how u doin");

// const randomNum = (val) => {
//     for (let index = 0; index < val; index++) {
//         const element = Math.floor(Math.random()*val);
        
        
//         console.log(element);
//     }
// };

// randomNum(5);


// simple generate
const singleRandom=(val) =>{
    const random = Math.floor(Math.random()*val);
    return random;

}

console.log(singleRandom(10));
