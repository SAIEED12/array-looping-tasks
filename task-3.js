/* Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik' */

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let a = "";
for(const i of numbers){
//  a = numbers.join(""); //numbers.join("") already concatenates everything in one step
                        // So the loop is pointless — same value is assigned again and again

                        
    a+=i; //Concatenates one element at a time

}
console.log(a);


