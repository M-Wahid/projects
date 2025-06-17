let gameseq=[];
let userseq=[];

let btnclr=["blue","maroon","yellow","red"];

let started=false;
let level=0;
let h2=document.querySelector('h2');



document.addEventListener("keypress",()=>{
   if(started==false){
    console.log("pressed");
    started=true;

    levelup();
   }

    
}); 

function gameflash(btn){
btn.classList.add("game");
setTimeout(()=>{
    btn.classList.remove("game");
},200);
}
function userflash(btn){
btn.classList.add("user");
setTimeout(()=>{
    btn.classList.remove("user");
},200);
}

 function levelup(){
   userseq=[];
    level++;
    h2.innerText=`Level ${level}`
// random index
    let btnidx=Math.floor(Math.random()*3+1);
// random color 
    let ranclr=btnclr[btnidx];
// random button 
    let ranbtn=document.querySelector(`.${ranclr}`);

    gameseq.push(ranclr);
    console.log(gameseq);

    // console.log(ranbtn.innerText); for check which btn accessed 

   gameflash(ranbtn);

}
function checkAns(indx){
    if(userseq[indx]==gameseq[indx]){
        // console.log("same value");
        if(userseq.length==gameseq.length)
            setTimeout(levelup,1000);
    }else{
        h2.innerHTML=`Game over!<b>your score was ${level}</b><br> press any key to restart`;
        
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="#deb887";
        },100)

        reset();
    }
}


function btnpress(){
    let btn=this;
    console.log("btn");
userflash(btn);

let userclr=btn.getAttribute("id");
console.log(userclr)
userseq.push(userclr); 

checkAns(userseq.length-1);
}

let btns=document.querySelectorAll(".box");
for(btn of btns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    userseq=[];
    gameseq=[];
    level=0;
    
}