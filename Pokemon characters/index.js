f();


async function f(){
    try{
        const s=document.getElementById("a").value.toLowerCase();
        const r=await fetch(`https://pokeapi.co/api/v2/pokemon/${s}`);

        if(!r.ok){
            throw new error("could not found");
        }

        const d=await r.json();
        const pp=d.sprites.front_default;
        const nn=document.getElementById("b");
        nn.src = pp;
        nn.style.display = "block";






        console.log(d);


    }
    catch(error){
        console.error(error);

    }
}