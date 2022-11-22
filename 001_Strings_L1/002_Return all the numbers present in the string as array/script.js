function return_all_numbers_present_in_string_as_array(str){
    let arr = str.split(' ');
    let ansArr =[];

    for(let i= 0; i < arr.length; i++){
        if(arr[i] % 1 == 0){
            ansArr.push(Number(arr[i]));    // pushing it after converting into Number
        }
    }
    return ansArr;
}

console.log(return_all_numbers_present_in_string_as_array('22 November 2022'))
console.log(return_all_numbers_present_in_string_as_array('i have no number'))