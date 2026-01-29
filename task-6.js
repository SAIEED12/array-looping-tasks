/* Given an array of student objects, print each student’s name and marks.

[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
Expected output:
John scored 85
Alice scored 90 */

let student = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
];

for(const key of student){
    console.log(`${key.name} scored ${key.marks}`);
}