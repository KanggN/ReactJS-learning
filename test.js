const array = [
    {   name : 'Ăn Cơm',
        age : 20,
        status : true
    },
    {   name : 'Học Bài',
        age : 10,
        status : false
    },
    {   name : 'Đá Banh',
        age : 50,
        status : true
    },
    
]
const array1 = ['Quang','An']
const array2 = [2,9,6]


/* console.log(array)
const sorted = array.sort(function(a,b){
     return a.name < b.name
})
console.log(sorted) */
console.log(array)
array.sort(function(a,b){
    var a = a.name.toLocaleLowerCase()
    var b = b.name.toLocaleLowerCase()
    if(a < b) {
        return -1
    }
    if(a > b) {
        return 1
    }
    return 0 
})
  console.log(array)



