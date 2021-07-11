console.log("this is my JS file")

const seats=document.getElementById("seats")
const remSeat=document.getElementById("remSeats")

console.log(seats)
console.log(remSeat)

const smallDiv=document.querySelectorAll(".smallDiv");

// console.log(smallDiv)
let seat=0;
let remaining=36;

seats.textContent=seat;
remSeat.textContent=remaining;

smallDiv.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        console.log(e)
         if(item.classList.contains('show')){
             item.classList.remove('show')
             seat--
             remaining++
             seats.innerHTML=seat;
             remSeat.innerHTML=remaining;
         }else{
             item.classList.add('show')
             seat++
             remaining--
             seats.innerHTML=seat;
             remSeat.innerHTML=remaining;
         }
    })
    
})



//Question 1

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
const person1 = {
    firstName: "Mary",
    lastName: "Doe"
}

console.log(person.fullName.apply(person1));
console.log(person.fullName.bind(person1));
console.log(person.fullName.call(person1));