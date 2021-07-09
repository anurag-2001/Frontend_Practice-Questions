//Question 1

const is_array= (arr)=>{
    return Array.isArray(arr);
  }
  
  console.log(is_array('w3school'));
  console.log(is_array([1,2,3]));

//Question 2
const array_clone= (arr)=>{
    return arr.splice(0);
  }
  
  console.log(array_clone([3,4,[5,6]]));
  console.log(array_clone([1,2,3]));



//Question 3

const first=(arr,n)=>{
    if(arr==null){
        return 0
    }

    if(n==null){
      return arr[0]
    }

    if(n<0){
        return []
    }

    return arr.slice(0,n)
}


console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));



//Question 4


  const myColor=['red','blue','green','white'];

  console.log(myColor.join(','));
  console.log(myColor.join(','));
  console.log(myColor.join('+'));

//Question 5
var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var count=0;
var fre=1;
var item
for(let i=0;i<arr1.length;i++){
    for(let j=i;j<arr1.length;j++){
       if(arr1[i]===arr1[j]){
           count++
         
       }
       if(fre<count){
        fre=count;
        item=arr1[i]
    }
       
    }
    count=0
}

console.log(item+' ('+fre+ ' times)');



