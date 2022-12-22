console.log("Active")
const r=document.querySelector('.result');
document.addEventListener('click',btn);
document.addEventListener('keydown',key);
var s;

function btn(e){
    const i=e.target.innerText;
    
    if(i=='AC'){
        console.log(i);
        r.innerText='';
        
    }
    else if(i==undefined){
        console.log(i);
        r.innerText=r.innerText.slice(0,-1);
        
    }
    else if(i=='%'){
        console.log(eval(r.innerText)/100);
        r.innerText=r.innerText+'/100'
        
    }
    else if(i=='='){
        r.innerText=eval(r.innerText);
        
        
    }
    else{
        s=r.innerText+i;
        console.log(i)
        r.innerText=s;
    }
}

function key(e){
    let i=e.key;
    // console.log(e.key)
    if(0<=i || i>=9 || i=='.' || i=='+' || i=='-' || i=='*' || i=='/' ){
        s=r.innerText+i;
        r.innerText=s;
    }
    else if(i=="%"){
        console.log(eval(r.innerText)/100);
        r.innerText=r.innerText+'/100'
    }
    else if(i=='Enter' || i=='='){
        r.innerText=eval(r.innerText);
    }
    else if(i=="Backspace"){
        r.innerText=r.innerText.slice(0,-1);
        
    }
}