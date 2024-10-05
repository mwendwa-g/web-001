
//top bottom scroll
const toUpbtn = document.getElementById("to-up");
const toBottombtn = document.getElementById("to-bottom");

toUpbtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

toBottombtn.addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });
  

//ordering
let numberOrdered = 0;

const plusBtn = document.getElementById("addBtn");
const minusBtn = document.getElementById("minBtn");
const amountOrdered = document.getElementById("numberDisp");
const placeorderBtn = document.getElementById("orderBtn");
const successP = document.getElementById("successful");

function ordering(){
  plusBtn.addEventListener('click', ()=>{
    numberOrdered ++;
    amountOrdered.innerHTML = numberOrdered;
  })
  
  minusBtn.addEventListener('click', ()=>{
    numberOrdered --;
    amountOrdered.innerHTML = numberOrdered;
  })
  
  placeorderBtn.addEventListener('click', ()=>{
    if(numberOrdered === 0){
      successP.textContent = "You havent ordered yet";
    }
    else if(numberOrdered > 0){
      successP.textContent = "Order placed Succesfully";
    }
    else{
      successP.textContent = "Invalid OrderAmount"
    }
  })
}


ordering();

//////////
const addButtons = button[id="addBtn"];
addButtons.forEach(addButton.addEventListener('click', ()=>{
  numberOrdered ++;
    amountOrdered.innerHTML = numberOrdered;
}))

