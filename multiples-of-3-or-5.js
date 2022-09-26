function multsOf3Or5Bellow1000() {
    let result = 0
    for(let isMult = 0 ; isMult < 1000 ; isMult++) {
        if(isMult % 3 == 0 || isMult % 5 == 0){
            result += isMult
        }
    }
    console.log(`The sum of all the multiples of 3 or 5 bellow 1000 is ${result}`)
}

multsOf3Or5Bellow1000()