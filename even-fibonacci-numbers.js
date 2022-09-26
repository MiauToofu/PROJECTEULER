let penultimo = BigInt(0)
let ultimo = BigInt(1)

let result = BigInt(0)

for(let idx = 1 ; idx < 4000000 ; idx++) {
    const temp = BigInt(penultimo)
    penultimo = BigInt(ultimo)
    ultimo = BigInt(temp) + BigInt(ultimo)

    if(ultimo % BigInt(2) == 0) {
        result += BigInt(ultimo)
    }
}

console.log(result)