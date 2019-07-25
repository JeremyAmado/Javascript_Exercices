//fizz buzz fizzbuzz  hacer un arreglo que imprima los numeros que se dividen por  3 fizz y lo que se dividan por 5 buzz y lo que se dividan por los 2 fizzbuzz
// let numeros = ['1', '2', '3', '4', '6', '9, 12, 15, 30']; &&



// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i])
// }

let numeros = [1, 3, 5, 6, 8, 9, 19, 25, 30, 15, 7, 2, 33, 23];



for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if ((numero % 3) === 0 && (numero % 5) === 0) {
        console.log("buzzfizz")
    } else if ((numero % 5) === 0) {
        console.log("fizz");
    } else if ((numero % 3) === 0) {
        console.log("buzz");
    } else {
        console.log(numero)
    }
}

// }s

// for (let i = 1; i * 5; i++) {
//     console.log(`${i} ${i * 2} ${i * 3} ${i * 4} ${i * 5}`);
// }