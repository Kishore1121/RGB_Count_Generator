let square=document.querySelectorAll('.squareclass')
let timeclick={
    red:0,
    green:0,
    yellow:0
}
square.forEach(total =>{
    total.innerText=0;
    total.onclick = () =>{
        timeclick[total.value]+=1
        total.innerText=timeclick[total.value]
    }
})

let cleargame=document.getElementById('clear')
function gameover() {
        square.forEach(result => {
        result.innerText=0;
    })
}
cleargame.onclick =() => gameover()
