// Callback Function
// คือ การเขียน Anonymus Function/Arrow Function
// ให้เป็นอาร์กิวเมนต์ส่งให้พารามิเตอร์

function funcA(x, y, z) {
    console.log(`Hello ${x}`);
    console.log(`Hi ${y}`);
    z();
}

function funcB() {
    let result = 10 + 20;

    console.log(`Value is ${data(result, 100)}`);  //callback function
}

// -----------Call Function-----------------

funcA(`Dog`, `Cst`, function() {
    console.log(`Goodbye`);
})

funcB((a, b) => {
    return a * b * 10;
})