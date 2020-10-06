// var alpha = "n"
// var n = alpha.charCodeAt();
// console.log(n);

// arr = []
// arr[0] = [ 1, 2]
// arr[1] = [ 3, 4]
// // console.log(arr)
// value = '1 2\n3 4\n5 6'
value = value.split('\n').map(function(val){
    val = val.split(' ')
    return [parseInt(val[0]), parseInt(val[1])]
})

// console.log(value)
// // for (i=0; i<arr.length; i++){
// //     console.log(arr[i])
// // }
// for (i=0; i<value.length; i++){
//     console.log('accessing the first value of the ' +i +'th index',value[i][0])
//     console.log('accessing the second value of the ' +i +'th index',value[i][1])
//     console.log(value[i].join(' '))
// }
arr = [ [1,2], [1,2,3,4,5], [1,2,3], [1,2,45,6,75,5], [1,2], [1,2]]

for(var i=0; i<arr.length; i++){
   

    for(var j=0; j<arr[i].length; j++){
        console.log(arr[i].length)
        console.log(arr[i][j])
    }

}