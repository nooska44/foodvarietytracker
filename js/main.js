//count the ticks and add to count
// This works 
// document.querySelector('#counter').addEventListener('click', addAmount)

// function addAmount(){
 
//     const amount = document.querySelectorAll('input[type="checkbox"]:checked');
//     document.querySelector('#count').innerText = (amount.length);
// }

//Attempting to add on change rather than click


document.addEventListener('change', addAmount)

function addAmount(){
 
    const amount = document.querySelectorAll('input[type="checkbox"]:checked');
    document.querySelector('#count').innerText = (amount.length);
}





// store in local storage 

// localStorage.setItem('#items')

// let boxes = document.getElementsByClassName('box').length;

// function save() {	
//   for(let i = 1; i <= boxes; i++){
// 	  let checkbox = document.getElementById(String(i));
//     localStorage.setItem("checkbox" + String(i), checkbox.checked);	
//   }
// }

// //for loading
// for(let i = 1; i <= boxes; i++){
//   if(localStorage.length > 0){
//     let checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
//     document.getElementById(String(i)).checked = checked;
//   }
// }
// window.addEventListener('change', save);


// reset - deletes local storage

