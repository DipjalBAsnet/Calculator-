let pass = prompt("enter the pass");
if(pass === "jdb") {
    alert("welcome, click ok to continue")
}
else {
    alert("Wrong!!")
}
const  btns = document.querySelectorAll('.button');
const display = document.getElementById('input');
const op = document.querySelectorAll('.operator');
const ac = document.getElementById('ac');
const del = document.getElementById('del');
const equals2 = document.getElementById('equals2');
// btn.addEventListener()
for (let i=0;i<btns.length; i++) {
btns[i].addEventListener('click', function() {
    display.value += btns[i].innerHTML
}
)
}
for (let i = 0; i<op.length; i++) {
    op[i].addEventListener('click', function() {
        display.value += op[i].innerHTML
    })
    equals2.addEventListener('click', function () {
        let result = eval(display.value);
        // equals2.innerHTML = result;
        display.value = result;
        equals2.innerHTML = '=';
        });
    }
ac.addEventListener('click', function() {
    display.value = '';
})
del.addEventListener('click', function () {
     display.value = display.value.slice(0, -1)
})
 
// -----------------pass-----------------------

