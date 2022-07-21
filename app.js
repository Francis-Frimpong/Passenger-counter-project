// const counterEl = document.getElementById("count-el").innerText = 6;
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch ;
// console.log(count)

// let myAge = 28;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge)

//  let count = 5;
// count = count + 1;
// console.log(count)

 let countEl = document.getElementById("count-el");
 let saveEl = document.getElementById("save-el")


 let count = 0;
 function increment(){
     count += 1;
     countEl.textContent = count 
 }

 function decrement(){
     count -= 1;
     countEl.textContent = count   
 }
// save function
function save(){
     let saveData = count + " - "
     saveEl.textContent += saveData

        // countEl.textContent = count = 0

        if(countEl.textContent = count){
            countEl.textContent = count= 0
        }
     
     
 }




