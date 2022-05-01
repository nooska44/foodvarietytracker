//count the ticks and add to count
document.querySelector('count').innerText = 0
document.querySelector('#counter').addEventListener('click', addAmount)

function addAmount(){
 
    const amount = document.querySelectorAll('input[type="checkbox"]:checked');
    document.querySelector('#count').innerText = (checkboxes.length);
}
// .catch(err => {
//     console.log(`error ${err}`)
// })
// }

// document.getElementById('select').onclick = function() {
//     let checkboxes = 
    
// }



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

