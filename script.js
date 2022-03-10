let display = document.getElementById("input-text");
let dotFlag = true
let disCheck = ""
    

let calculate=(number)=>{
    if(number=="."){
        console.log(disCheck)
        if(disCheck==""  || !dotFlag){
            return
        }
        
        dotFlag=false
    }
    if(number == "+" || number == "-" || number == "/" || number == "*"){
        dotFlag = true
        disCheck = ""
    }
    if(display.value.length<11){
        display.value=display.value+number;
        if(number == "+" || number == "-" || number == "/" || number == "*"){
            return
        }
        disCheck = disCheck + number
    }
    
}
let result=()=>{
    try{
        display.value=eval(display.value);
    }
    catch{
        alert("error")
    }
}
let clr=()=>{
    display.value="";
}
let del=()=>{
    display.value = display.value.slice(0,-1);
}
let per=(number)=>{
    display.value=(parseFloat(display.value)*number).toString();
    
}
