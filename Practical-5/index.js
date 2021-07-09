const result=document.getElementById("result");

console.log(result.innerHTML);

const btns=document.querySelectorAll("button");

console.log(btns)

const addBtn=btns[0];
const subBtn=btns[1];
const mulBtn=btns[2];
const divBtn=btns[3];
console.log(addBtn)

const clickHandler=(e)=>{
  console.log(e)
}
addBtn.addEventListener("click",()=>{
  
let val1=parseInt(document.getElementById("value1").value);

let val2=parseInt(document.getElementById("value2").value);
  const sum=val1+val2;
  console.log(val1);
  console.log(val2);
  result.innerHTML="The Result of Operator is : "+sum;
  
})

subBtn.addEventListener("click",()=>{
  let val1=parseInt(document.getElementById("value1").value);

let val2=parseInt(document.getElementById("value2").value);
  const sub=val1-val2;
  console.log(val1);
  console.log(val2);
  result.innerHTML="The Result of Operator is : "+sub;
})

mulBtn.addEventListener("click",()=>{
  let val1=parseInt(document.getElementById("value1").value);

let val2=parseInt(document.getElementById("value2").value);
  const mul=val1*val2;
  console.log(val1);
  console.log(val2);
  result.innerHTML="The Result of Operator is : "+mul;
})
divBtn.addEventListener("click",()=>{
  let val1=parseInt(document.getElementById("value1").value);

let val2=parseInt(document.getElementById("value2").value);
  const div=val1/val2;
  console.log(val1);
  console.log(val2);
  result.innerHTML="The Result of Operator is : "+div;
})

