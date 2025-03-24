function reverseString(str){
    return str.split("").reverse().join("");
    
}
console.log(reverseString("tenet"))


function isPalindrome(name){
    const reversed=name.split("").reverse().join("");
    return name === reversed;
}
console.log(isPalindrome("tenet"));


function findLargest(arr){
    let largest = arr[0]
    for(let i = 1;i<arr.length;i++){
        if(arr[i] > largest){
           largest= arr[i]
            
        }
    }
    return largest;
}
console.log(findLargest([1,2,3,4,5]))














function accendingOrder(arr){
    let i =1;
    for(i =1; i<arr.length;i++){
        arr[i]=sort(arr[i])
    }
}
console.log(accendingOrder([8,0,1]))