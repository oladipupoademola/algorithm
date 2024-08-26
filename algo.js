//iteration or looping
const numbers = [9,8,4,5,7,10,11,3,1,3]
let sum = 0
numbers.forEach((num) => {
    sum += num
    

})
console.log(sum)

for(let i=0; i<numbers.length; i++){
    sum +=numbers[i]
}

//linear search
const users = [
    {id: 1, name:"DML"},
    {id: 2, name:"Juwon"},
    {id: 3, name:"Alhaja"},
    {id: 4, name:"Bozbaby"}
]

const searchByName = (name) => {
    return users.find((user) => user.name === name)
}
console.log(searchByName("Juwon"))

//Binary Search
const binarySearch = (array, target) => {
    let left = 0
    let right = array.length - 1
    while(left <= right) {
        const mid = Math.floor((left + right) /2)
        if (array[mid] === target) {
            return mid
        }else if(array[mid] < target){
            left = mid + 1
        }else{
            right = mid -1
        }
    }
    return -1
}

const sortedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const target =  8
console.log(binarySearch(sortedArray, target))

//Bubble Sort
const products = [
    {name:"Beans", price:1000},
    {name:"Bread", price:500},
    {name:"Water", price:300},
    {name:"Takeway", price:200},
    {name:"Plaintain", price:100}
]

const sortedProducts = products.sort((a,b) => a.price - b.price)
console.log(sortedProducts)

//Merge Sort
const mergeSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
  
    return merge(left, right);
  };
  
  
  const merge = (left, right) => {
    let result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left, right);
  };
  
  const unsortedArray = [34, 7, 23, 32, 5, 62];
  console.log(mergeSort(unsortedArray))