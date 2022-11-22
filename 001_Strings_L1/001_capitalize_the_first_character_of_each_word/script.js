function capitalizeFirstCharOfEachWord(str){

    let arr = str.split(' ')  // split method will break the string into array at whitespaces
    for(let i =0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);  // slice method will cut like knife from coordinate 1 to last.
    }
    
    let ansStr = arr.join(' ') // this is used to join the array into string 
    return ansStr;
}
console.log(capitalizeFirstCharOfEachWord("hello world"))
console.log(capitalizeFirstCharOfEachWord("i love you"))


// TC:- O(length of string)



