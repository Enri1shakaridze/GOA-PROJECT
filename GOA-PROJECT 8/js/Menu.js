import data from '../data.json' with { type: 'json'}

let buttons = document.querySelectorAll('.btns');
let MenuResult = document.querySelector('.article3-Menu-result');
let article3menu = document.querySelector('.article3-all-menu');
let btnless = document.getElementById('btnless')
let btnall = document.getElementById('btnall')
let mainb = document.querySelector('#mainb');
let redbgcartlength = document.querySelector('.redbgcartlength');
let cart = JSON.parse(localStorage.getItem('cart')) || []
localStorage.setItem('cart', JSON.stringify(cart))
let cartlen = document.getElementById('cartlen');
cartlen.textContent = cart.length
let mode = 'AllLess2';
let res;

function renderCards(){
    MenuResult.innerHTML = ``;
    data.forEach(obj => {
        obj = obj[mode]
        if(obj){
            obj.forEach(resobj => {
                MenuResult.innerHTML += `
                    <div class="food-card">
                        <div class="food-image">
                            <img src="${resobj.image}">
                        </div>
                        <div class="food-content">
                            <h2>${resobj.name}</h2>
                            <p>Lorem Ipsum is simply dummy text of the <br> printing and typesetting industry.</p>
                            <div class="food-footer">
                                <span class="price">$${resobj.price}</span>
                                <button id="${resobj.name}" class="cart-btns">
                                    <img width="30px" src="./image/Addcart.webp" >
                                </button>
                            </div>
                        </div>
                    </div>
                `
            })
        }
    })
    let cartbutton = document.querySelectorAll('.cart-btns')
        cartbutton.forEach(btn => {
            btn.addEventListener('click', function(){
                let allMore = data.find(item => item.AllMore);
                allMore = allMore.AllMore
                allMore.forEach(x => {
                    if(x.name === btn.id){
                        cartlen.textContent = cart.length
                        console.log(x)
                        let ex = cart.find(i => i.obj.name === x.name)
                        if(ex){
                            ex.quantity++
                            localStorage.setItem('cart', JSON.stringify(cart))
                            cartlen.textContent = cart.length
                        }else{
                            cart.push({
                                quantity: 1,
                                obj: x
                            })
                            localStorage.setItem('cart', JSON.stringify(cart))
                            cartlen.textContent = cart.length

                        }
                    }
                })
            })
        })
}

buttons.forEach(btn => {

    btn.addEventListener('click', function(){
        if(btn.dataset.mode !== 'AllLess' && btn.dataset.mode !== 'AllMore'){
            for(let i = 0; i < buttons.length ; i++){
                if(buttons[i].dataset.mode !== 'AllMore' && buttons[i].dataset.mode !== 'AllLess'){
                    console.log(buttons[i].dataset.mode)
                    buttons[i].style.borderBottom = "5px solid #ffffff"
                    btn.style.borderBottom = "5px solid #ac0e00"
                }
            }
        }
        mode = btn.dataset.mode
        if(mode === 'AllLess2'){
            btnall.style.display = 'flex'
        }else{
            btnall.style.display = 'none'
            btnless.style.display = 'none'
        }
        console.log(mode)
        renderCards()
    })
})

renderCards()

if(mode === 'AllLess2'){
    btnall.style.display = 'flex'
    mainb.style.borderBottom = "5px solid #ac0e00"
}else{
    btnall.style.display = 'none'
}

btnall.addEventListener('click', function(){
    mode = 'AllMore';
    renderCards();
    btnall.style.display = 'none'
    btnless.style.display = 'flex'
})
btnless.addEventListener('click', function(){
    mode = 'AllLess'
    renderCards()
    btnall.style.display = 'flex'
    btnless.style.display = 'none'
})