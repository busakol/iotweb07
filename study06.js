//function
// parameter คือ ตัวแปรประเภทหนึ่งเขียนอยู่ในวงเล็บหลังชื่อฟังก์ชัน
// return คือ คำสั่งที่ใช้คืนค่ากลับไปให้กับตัวเรียกใช้ฟังก์ชันที่เขียนอยู่ในนั้น { }

// 1. no parameter, no return
function showHi() {
    console.log("hi");
    console.log("555");
}

// 2. have parameter no return
function showNumber(n1, n2, n3) {
    console.log(`${n1} + ${n2} + ${n3}`);
    console.log(555);
}


// 3. no parameter has return
function showWow() {
    console.log("เธอสบายดีไหม....");
    return "Wow wow wow";
}


// 4. have parameter has return
function showSong(songName) {
    return `${songName} นายแน่มาก ^o^`;
}

// เรียกใช้ฟังก์ชัน call function
showHi();
showHi();
sumNumber(10, 20, 30); //ข้อมูลที่ส่งพารามิเตอร์เรียกว่า อาร์กิวเมนต์

let result = showWow();
console.log(result);

console.log(showSong(`นายแน่มาก ^o^`));