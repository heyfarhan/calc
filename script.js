console.log("Active")
var k;
const r=document.querySelector('.result');
document.addEventListener('click',btn);

document.addEventListener('keydown',key);
var s;

function btn(e){
    
    const i=e.target.innerText;
    // console.log(e.target);
    e.target.style.transform="scale(1.1)";
    if(i=='AC'){
        // console.log(i);
        r.innerText='';
        navigator.vibrate(200);
        
    }
    else if(i==undefined){
        // console.log(i);
        r.innerText=r.innerText.slice(0,-1);
        navigator.vibrate(100);
        
    }
    else if(i=='%'){
        // console.log(eval(r.innerText)/100);
        r.innerText=r.innerText+'/100'
        navigator.vibrate(100);
        
    }
    else if(i=='='){
        r.innerText=eval(r.innerText);
        navigator.vibrate(100);
        
        
    }
    else{
        s=r.innerText+i;
        // console.log(i)
        r.innerText=s;
        navigator.vibrate(100);
    }
    e.target.addEventListener('transitionend',remove);
}
function remove(e){
    // console.log(this)
        this.style.transform="scale(1)";

}

function key(e){
    const b=document.querySelectorAll('button')
    i=e.key;
    k=i;
    // console.log(e.key);
    b.forEach(add);
    if(0<=i || i>=9 || i=='.' || i=='+' || i=='-' || i=='*' || i=='/' ){
        s=r.innerText+i;
        r.innerText=s;
        navigator.vibrate(100);
    }
    else if(i=="%"){
        console.log(eval(r.innerText)/100);
        r.innerText=r.innerText+'/100'
        navigator.vibrate(100);
    }
    else if(i=='Enter' || i=='='){
        r.innerText=eval(r.innerText);
        navigator.vibrate(100);
    }
    else if(i=="Backspace"){
        r.innerText=r.innerText.slice(0,-1);
        navigator.vibrate(100);
        
    }
}
function add(e){
    // console.log(e.innerText);
    if(k==e.innerText){
        e.style.transform="scale(1.1)";
    }
    else if('Enter'==k && e.innerText=='=' ||  'Backspace'==k && e.innerText=='')
    {
        e.style.transform="scale(1.1)";
    }
    e.addEventListener('transitionend',remove2);
    
}
function remove2(e){
    this.style.transform="scale(1)";
    // console.log(this)
    
}
