// Write a function to check if a given string is a palindrome.
 
const palindrome = (str) =>{
    const reversed = str.split('').reverse().join('')
    return reversed === str;
}
console.log(palindrome('level'));


function myFunction(obj, key) {
    return obj[key]; // Return the value corresponding to the provided key
  }
  function checkEvenOrOdd (num) {
    if(num %2 ==0){
        return 'Even'
    }else{
        return 'Odd'
    }
}