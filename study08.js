// Expression Function แบบ Arrow Function
// นิยมเขียนอยู่ 2 แบบ คือ
// กำหนดค่าให้กับตัวแปร หรือ เป็นอาร์กิวเมนต์ส่งให้พารามิเตอร์
const sum = function (a, b) {
    return a + b;
}
const hello = (fname, lname) => {
    console.log(`Hello....${fname} ${lname}`);
}

let showWow = () => {
    console.log(`Wow wow wow`);
}

// ++++++++++++++++++++++++++++++++
// เมื่อใดก็ตามตัวแปรเก็บฟังก์ชัน การใช้งาตัวแปรเหมือนกัน
// การเรียกใช้ฟังก์ชัน

console.log(sum(100, 200));

hello(`John`, `Doe`);

showWow();