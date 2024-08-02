const d=document.getElementById("d");
let t=null;
let s=0;
let e=0;
let r=false;

function start(){
    if(!r){
        s=Date.now() - e;
        t=setInterval(u,10);
        r=true;
    }
    

}
function stop(){
    if(r){
        clearInterval(t);
        e=Date.now() - s;
        r=false;
    }
  

    }




function reset(){
    clearInterval(t);
    s=0;
    e=0;
    r=false;
    d.textContent="00:00:00:00";


  

}
function u(){
    const cc=Date.now();
    e=cc-s;
    let h=Math.floor(e/(1000*60*60));
    let m=Math.floor(e/(1000*60)%60);
    let sec=Math.floor(e/1000%60);
    let ss=Math.floor(e%1000/10);

    h=String(h).padStart(2,"0");
    m=String(m).padStart(2,"0");
    sec=String(sec).padStart(2,"0");
    ss=String(ss).padStart(2,"0");



    d.textContent = `${h}:${m}:${sec}:${ss}`;


    
}