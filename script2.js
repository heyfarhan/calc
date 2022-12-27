console.log("Active");
window.addEventListener('keydown',keys);
window.addEventListener('click',btn);
const all=document.querySelectorAll('button');
const r=document.querySelector('.result');
// console.log(r);
var j;



function btn(e){

    // console.log(e.target);
    let t=e.target.innerText;
    if('DIV'!=e.target.tagName && 'P'!=e.target.tagName){
    if(t>=0 || t<=9 || t=='AC'|| t=='⌫'|| t=='%'|| t=='/'|| t=='*'|| t=='-'|| t=='+' || t=='=' || t=='.'){
    console.log(e.target);
    // console.log(e.target.innerText);
    if(t>=0 || t<=9  || t=='/'|| t=='*'|| t=='-'|| t=='+' || t=='.'){
        r.innerText=r.innerText+t;
        e.target.style.transform="scale(1.1)";
        navigator.vibrate(100);
        // console.log(e.target)
        // console.log(t)
    }
     if(t=='AC'){
        r.innerText='';
        navigator.vibrate(100);
        e.target.style.transform="scale(1.1)";
    }
    else if(t=='⌫'){
        e.target.style.transform="scale(1.1)";
        r.innerText=r.innerText.slice(0,-1);
        navigator.vibrate(100);
    }
    else if(t=='%'){
        e.target.style.transform="scale(1.1)";
        // console.log(e)
        // console.log(t)
        r.innerText=r.innerText+'/100';
        navigator.vibrate(100);
    }
    else if(t=='='){
        e.target.style.transform="scale(1.1)";
        // console.log(e)
        // console.log(t)
        r.innerText=eval(r.innerText);
        navigator.vibrate(100);
    }
    window.addEventListener('transitionend',remove);
    
}

}}
function keys(e){
    // console.log(e.key);
    j=e.key;
    
    all.forEach(key);
    
}
function key(e){
    let t=e.innerText;
    // console.log(j)
    if(t==j){
        // console.log(j)
        // console.log(e)
        e.style.transform="scale(1.1)";
        if (t=='%'){
            r.innerText=r.innerText+'/100';
navigator.vibrate(100);
        }
        else {
        r.innerText=r.innerText+j;
            navigator.vibrate(100);
        }
        
    }
    if(j=='Enter' && t=='='){
        // console.log(e)
        // console.log(t)
        e.style.transform="scale(1.1)";
        r.innerText=eval(r.innerText);
        navigator.vibrate(100);
        
    }
    if(j=='Backspace' && t=='⌫'){
        e.style.transform="scale(1.1)";
        // console.log(e)
        // console.log(t)
        r.innerText=r.innerText.slice(0,-1);
     navigator.vibrate(100);   
    }
    if(j=='Backspace' && t=='⌫'){
        e.style.transform="scale(1.1)";
        // console.log(e)
        // console.log(t)
        r.innerText=r.innerText.slice(0,-1);
        navigator.vibrate(100);
    }
    window.addEventListener('transitionend',remove);
    
    
}

function remove(e){
    // console.log(e.target);
    e.target.style.transform="scale(1)";
}
