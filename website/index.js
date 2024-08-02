//let u=window.prompt("hello");
//document.write(u);

/*let k;
document.getElementById("mybutton").onclick=function(){
    k=document.getElementById("a").value;
    document.getElementById("b").innerHTML=k;
    console.log(k);


}*/

let c=0
document.getElementById("b").onclick=function(){
    c-=1;
    document.getElementById("a").innerHTML=c;

}
document.getElementById("c").onclick=function(){
    c=0;
    document.getElementById("a").innerHTML=c;
    
}
document.getElementById("d").onclick=function(){
    c+=1;
    document.getElementById("a").innerHTML=c;
    
}


/*let a=-2;
if(a>=18){
    document.write("adult");
}
else if(a<0){
    document.write("not born")
}
else{
    document.write("kid");
}

document.getElementById("c").onclick = function(){
    if(document.getElementById("bb").checked){
        console.log("subscribed");
    }
    else{
        console.log("unsubscribed");
    }
}
let n=1234567;
n=n.toLocaleString("en-US");
console.log(typeof(n));*/
   
 



