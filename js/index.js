//debugger
function pow (num, degree) {
    if (degree === 0) {
        return 1;
    }

    if (degree < 0) {
        return 1 / pow(num, -degree)
    }

    if (!Number.isInteger(degree)) {
        alert ("Ви ввели не цілий ступіть!");
        return
    }

    return num * pow(num, degree - 1)
}

const num = parseFloat(prompt("Введіть число: "));
const degree = parseInt(prompt("Введіть ступінь: "));

if (isNaN(num) || isNaN(degree)) {
    alert("Введено некоректні дані.");
} else {
    const result = pow(num, degree);
    console.log(`${num}^${degree} = ${result}.`);
}