// function isPalindrome(name){
//     const reversed = name.split("").reverse().join("");
//     return name === reversed;
// }
// console.log(isPalindrome("mom"))


function findLargest(arr){
    let largest = arr[0]
    for(let i = 1;i<arr.length;i++){
        if(arr[i] > largest){
            arr[i]=largest
        }
    }
}
console.log(findLargest[1,2,3,4,5])