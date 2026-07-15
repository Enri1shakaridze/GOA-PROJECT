let labelres = document.querySelector('#cxl');
let div = document.createElement('div');
let body = document.querySelector('body')
body.appendChild(div)
div.id = 'response'
div.style.display = 'none'
let div2 = document.createElement('div');

div2.innerHTML = `
    <h1>Resturant</h1>
    <nav id='navf'>
        <a href="./index.html">Welcome</a>
        <a href="#article3-all-menu">Our Menu</a>
        <a href="">Franchise</a>
        <a href="">Contact</a>
    </nav>
    `

console.log(div)
labelres.addEventListener('click', function(){
    if(div.style.display === 'none'){
        div.style.display = 'block'
        div.className = 'animation'
        div.appendChild(div2)
    }else{
        div.className = 'remove-animation'
        setTimeout(() => {
            
            div.style.display = 'none'
        }, 500);
    }
})