let button = document.getElementById('add');
let inputs =document.querySelectorAll('input');

button.addEventListener('click',()=>{
    inputs.forEach(inputs=>{
        if(inputs.checked){
            console.log(inputs.value);
        }
    })
})


