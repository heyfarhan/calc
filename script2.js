console.log("Active");
document.addEventListener('keydown', keys);
document.addEventListener('click', btn);
const all = document.querySelectorAll('.btn');
const r = document.querySelector('.result');
// console.log(r);
var j, t;



function btn(e) {
    // console.log(e.target);
    t = e.target.innerText;
    // console.log(t)
    if ('SECTION' != e.target.tagName && 'P' != e.target.tagName) {
        if (t >= 0 || t <= 9 || t == 'AC' || t == '⌫' || t == '%' || t == '/' || t == '*' || t == '-' || t == '+' || t == '=' || t == '.') {
            // console.log(e.target);
            // console.log(e.target.innerText);
            if (t >= 0 || t <= 9 || t == '/' || t == '*' || t == '-' || t == '+' || t == '.') {
                r.innerText = r.innerText + t;
                e.target.style.transform = "scale(1.1)";
                navigator.vibrate(100);
                // console.log(e.target)
                // console.log(t)
            }
            if (t == 'AC') {
                navigator.vibrate(100);
                r.innerText = '';
                e.target.style.transform = "scale(1.1)";
            }
            else if (t == '⌫') {
                navigator.vibrate(100);
                e.target.style.transform = "scale(1.1)";
                r.innerText = r.innerText.slice(0, -1);
                
            }
            else if (t == '%') {
                navigator.vibrate(100);
                e.target.style.transform = "scale(1.1)";
                // console.log(e)
                // console.log(t)
                r.innerText = r.innerText + '/100';
                
            }
            else if (t == '=') {
                navigator.vibrate(100);
                e.target.style.transform = "scale(1.1)";
                // console.log(e)
                // console.log(t)
                r.innerText = eval(r.innerText);

            }
            window.addEventListener('transitionend', remove);
            
        }
    }
    
}
function keys(e) {
    // console.log(e.key);
    j = e.key;
    
    all.forEach(key);
    
}
function key(e) {
    // console.log(j)
    t = e.innerText;
    if (j == 'Enter' && t == '=') {
        // console.log(e)
        // console.log(t)
        e.style.transform = "scale(1.1)";
        r.innerText = eval(r.innerText);
        return;
        
    }
    if (t == j) {
        // console.log(j)
        // console.log(e)
        e.style.transform = "scale(1.1)";
        if (t == '%') {
            r.innerText = r.innerText + '/100';
            navigator.vibrate(100);
            
        }
        else {
            navigator.vibrate(100);
            r.innerText = r.innerText + j;
        }
        
    }
    if (j == 'Backspace' && t == '⌫') {
        navigator.vibrate(100);
        e.style.transform = "scale(1.1)";
        // console.log(e)
        // console.log(t)
        r.innerText = r.innerText.slice(0, -1);
        
    }
    if (j == 'Escape' && t == 'AC') {
        navigator.vibrate(100);
        // console.log(e)
        r.innerText = '';
        e.style.transform = "scale(1.1)";
        
    }
    window.addEventListener('transitionend', remove);
    
    
}

function remove(e) {
    // console.log(e.target);
    e.target.style.transform = "scale(1)";
}
const count = document.getElementById('view');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/heyfarhan/calc/?amount=1')
	.then(res => res.json())
	.then(res => {
		count.innerHTML = "👁 "+res.value;
	})
}
