const d=document.getElementById("d");


function aa(input){
    d.value += input;

}
function cleardisplay(){
    d.value = "";

}
function calc(){
    try{
    d.value = eval(d.value);
    }
    catch(error){
        d.value ="Error";
    }

}