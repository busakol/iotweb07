// Varible ตัวแปร
//  สร้างตัวแปรได้ 3 วิธี
var dataA = 10; // var เป็น global เปลี่ยนค่าได้ **เลี่ยงได้เลี่ยง
let dataB = 20; // let เป็น Local (ใช้ได้เฉพาะใน {} นั้นๆ) เปลี่ยนค่าได้ 
const dataC = 30; // const เป็น Local (ใช้ได้เฉพาะใน {} นั้นๆ) เปลี่ยนค่าไม่ได้

dataA = "Sombat";
dataA = 20;
dataA = true;

// dataC = 300; Error เพราะ เปลี่ยนค่าไม่ได้
dataB = 200;
