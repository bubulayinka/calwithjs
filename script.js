let display = document.getElementById("input-text");

let calculate=(number)=>{
    display.value = display.value+number;
}
let result=()=>{
    try{
        display.value =eval(display.value);
    }
    catch(err){
        alert("error");
    }
}
let clr=()=>{
    display.value='';
}
let del=()=>{
    display.value=display.value.slice(0,-1);
}
let per=(number)=>{
    display.value = display.value*number;
}