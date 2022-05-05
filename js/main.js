// check the boxes that are stored in local storage
let keys = Object.keys(localStorage)  
// let count = Object.keys(localStorage).length



console.log(count)
for(let i = 0; i < keys.length; i++ ){
    let element = document.getElementById(keys[i])
    if (element) {
        element.checked = true
    }
    document.querySelector('#count').innerText = (keys.length);
}

//count as checkboxes are checked and unchecked

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

//reset button unchecks all boxes

document.querySelector('button').addEventListener('click', clearAll)

 function clearAll() {
    localStorage.clear()
    
    for (const checkbox of document.querySelectorAll('.box')) {
        checkbox.checked = false //for unselection
        }
        console.log(document.querySelector('#count').innerText = 0)
    }; 








