//count the ticks and add to count
// This works 
// document.querySelector('#counter').addEventListener('click', addAmount)

// function addAmount(){
 
//     const amount = document.querySelectorAll('input[type="checkbox"]:checked');
//     document.querySelector('#count').innerText = (amount.length);
// }

//Attempting to add on change rather than click


// document.addEventListener('change', addAmount)

// function addAmount(){
 
//     const amount = document.querySelectorAll('input[type="checkbox"]:checked');
//     localStorage.setItem('checks', amount)
//     document.querySelector('#count').innerText += localStorage.getItem('checks');
//     // document.querySelector('#count').innerText = (amount.length);
// }

// //incase I mess up 
// document.addEventListener('change', addAmount)

// function addAmount(){
 
//     const amount = document.querySelectorAll('input[type="checkbox"]:checked');
//     document.querySelector('#count').innerText = (amount.length);
// }







let keys = Object.keys(localStorage)  

for(let i = 0; i < keys.length; i++ ){
    let element = document.getElementById(keys[i])
    if (element) {
        element.checked = true
    }
}



document.addEventListener('change', updateCount)

function updateCount(event){
    const amount = document.querySelectorAll('input[type="checkbox"]:checked');
    document.querySelector('#count').innerText = (amount.length);
    if(event.target.checked){
        localStorage.setItem(event.target.id, 'true')
    } else {
        localStorage.removeItem(event.target.id, 'false')
    }
    
    console.log(event.target.id)
}


document.getElementById("clear").onclick = clear_me;

function clear_me() {
    localStorage.clear();
   
}

//add document.addEventListener('click', clear)

// uncheck all checked boxes 








document.getElementById('clear')

// document.addEventListener('click', clear)

// function clear(){
//     document.querySelector('button').localStorage.clear()
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

// localStorage.clear()
