// Operator
// 1. Arithemetic Operators + - * / % **
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);
console.log(2 ** 3);
console.log("+++++++++++++++++++++++++");
// 2. Comparison Operator == === != !== > < >= <= ผลลัพธ์แค่ teue / false
// เปรียบเทียบได้ทั้งตัวเลข / ข้อความ
// ตัวเลข น้อยกว่า ตัวอักษร, ตัวใหญ่ น้อยกว่า ตัวเล็ก
// ตัวอักษรที่มาก่อน น้อยกว่า ตัวอักษรที่มาทีหลัง
console.log("Sombat" < "Somjai"); // true
console.log("sau" >= "SAU"); // true
console.log("Io5T" <= "I37"); // false
console.log("5" == 5); // true
console.log("5 " === 5); // falese
console.log("+++++++++++++++++++++++++");
// 3. Logical Operator && || ! ผลลัพธ์แค่ true / false
console.log(true);
console.log(false);
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log("+++++++++++++++++++++++++");
// 4. Incerment / Decrement Operator ++ --
let a = 10, b = 20;
console.log(++a); // 11
console.log(--a); // 10
// 5. Trinary Operator ___? ___:___ ให้ 10 ดาวเพราะเห็นบ่อย
// ตรวจสอบหน้าเครรื่องหมายคำถาม ? หากจริงได้หลัง ? หากเท็จได้หลัง :
let score = 75;
console.log(score >= 50 ? "Pass" : "Not Pass");
// 6. Assigment Operator = += -= *= /= %= **=
// 7. Nullish Coalescing Operator && ให้ 3 ดาวเพราะกลัวสับสน logic &&
// ตรวจสอบค่าตัวแปร หากมีค่า null หรือ undefined จะได้ค่าหลัง && แต่ถ้ามีค่าอื่น ๆ จะได้ค่าตัวแปรนั้น
let x = 30;
let y = null;
console.log(x && "Wow");
console.log(y && "Hi....");