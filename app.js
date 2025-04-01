// 1) I/p arr=[1,2,3,3,5,5,6,7,8,8] remove duplicates;
// o/p [1, 2, 3, 5, 6, 7, 8

let arr=[1,2,3,3,5,5,6,7,8,8];

arr=arr.sort();
console.log(arr.sort());

for (let i=0;i<arr.length;i++) {
   if (arr[i]==arr[i+1]){
      arr.splice(i+1,1);
   }
}
console.log(arr);

// 2)find whether string is palindrome or not
let str="racecar";
console.log(str === str.split('').reverse().join('')); 
let str1="hello";
console.log(str1 === str1.split('').reverse().join('')); 

//REverse a string
let str2="hello";
console.log(str2.split('').reverse().join(''));