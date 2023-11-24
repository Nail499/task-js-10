let openn = document.getElementById("open");
let closee = document.getElementById("close");
let text = document.getElementById("text");

openn.disabled=true;
closee.addEventListener('click',()=>{
    text.disabled=true;
    closee.disabled=true;
    openn.disabled=false;
})
openn.addEventListener('click',()=>{
    text.disabled=false;
    closee.disabled=false;
    openn.disabled=true;
})