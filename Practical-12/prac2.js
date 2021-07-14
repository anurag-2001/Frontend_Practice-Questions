let myForm = document.getElementById("myForm");
let myInput = document.getElementById("myInput");
let myList = document.getElementById("myList");

myForm.addEventListener("submit", (e) => {
    e.preventDefault()     // As Submit button carries few inbuilt functions..we use preventDefault to reset its inbuilt function. 
    createItem(myInput.value);     //Getting the value from our input box
})

function createItem(x){
    let ourHTML = `<li>${x} <button onclick = "deleteItem(this)">Delete</button> </li> <br>`
    myList.insertAdjacentHTML("beforeend", ourHTML);    
    myInput.value = "";  //To reset the value after clicking on Submit
    myInput.focus();    //To focus on the input even after submitting so that we can enter more elements in the list directly.  
}

function deleteItem(deleteMe){
    deleteMe.parentElement.remove();   //deletes the list inside the parent Element
}
