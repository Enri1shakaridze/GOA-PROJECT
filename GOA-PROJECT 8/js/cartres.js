console.log(JSON.parse(localStorage.getItem('cart')))
let emptydiv = document.querySelector('.emptydiv')
let noemptydiv = document.querySelector('.noemptydiv')
let cart = JSON.parse(localStorage.getItem('cart'))
let cartres = document.querySelector('.cartres')
let totalred = document.getElementById('totalred');
let paymentbtn = document.getElementById('paymentbtn');
let maincartforseccond = document.querySelector('.maincartforseccond');
console.log(maincartforseccond)
let cartlen = document.getElementById('cartlen');
cartlen.textContent = cart.length
let sub = document.getElementById('sub');
let tax = document.getElementById('Tax');
let fee = document.getElementById('fee');
let totalprice = 0
let taxprice = 0
let subprice = 0
let feeprice = 0


function addcart(){
    cartres.innerHTML = '';
    totalprice = 0
    taxprice = 0
    subprice = 0
    totalred.textContent = `$${totalprice.toFixed(2)}`
    cart.forEach(item => {
        subprice += item.obj.price * item.quantity
        taxprice = subprice * 0.1
        feeprice = 9.5
        totalprice = subprice + taxprice + feeprice
        totalred.textContent = `$${totalprice.toFixed(2)}`
        sub.textContent = `$${subprice.toFixed(2)}`
        tax.textContent = `$${taxprice.toFixed(2)}`
        fee.textContent = `$${feeprice.toFixed(2)}`
        console.log(item)
        cartres.innerHTML += `
            <div class="cart-item">
                <div class="cart-left">
                    <img src=".${item.obj.image}" alt="${item.obj.name}">
                </div>

                <div class="cart-info">
                    <h3>${item.obj.name}</h3>
                    <p>${item.obj.description}</p>
                </div>

                <div class="cart-price">$${item.obj.price}</div>

                <div class="cart-quantity">
                    <div class="cart-quantitystyle">
                        <button id="${item.obj.name}" class="minus">−</button>
                        <span>${item.quantity}</span>
                        <button id="${item.obj.name}" class="plus">+</button>
                    </div>
                </div>

                <div class="cart-total">$${(item.obj.price * item.quantity).toFixed(2)}</div>

                <button id="${item.obj.name}" class="delete-btn">
                    <img width="20px" src="../image/remove.png">
                </button>
            </div>
            `;
    });
    
    let btnsp = document.querySelectorAll('.plus')
    btnsp.forEach(btn => {
        btn.addEventListener('click', function(){
            cart.forEach(obj => {
                if(obj.obj.name === btn.id){
                    obj.quantity++
                    localStorage.setItem('cart', JSON.stringify(cart))
                    addcart()
                }
            })
        })
    })
    let btnsm = document.querySelectorAll('.minus')
    btnsm.forEach(btn => {
        btn.addEventListener('click', function(){
            cart.forEach(obj => {
                if(obj.obj.name === btn.id){
                    if(obj.quantity === 1){
                        alert('ეს არის მინიმალური ზღვარი!')
                        addcart()
                    }else{
                        obj.quantity--
                        localStorage.setItem('cart', JSON.stringify(cart))
                        addcart()
                    }
                }
            })
        })
    })
    let delete_btn = document.querySelectorAll('.delete-btn');
    delete_btn.forEach(btn => {
        btn.addEventListener('click', function(){
            cart.forEach(obj => {
                if(obj.obj.name === btn.id){
                    cart = cart.filter(x => x !== obj);
                    localStorage.setItem('cart', JSON.stringify(cart))
                    cartlen.textContent = cart.length
                    addcart()
                    lengthcart()
                }
            })
        })
    })
}

addcart()



function lengthcart(){
    if(cart.length > 0){
        emptydiv.style.display = 'none'
        noemptydiv.style.display = 'flex'
        paymentbtn.style.backgroundColor = 'red'

    }else{
        emptydiv.style.display = 'flex'
        noemptydiv.style.display = 'none'
        paymentbtn.style.backgroundColor = 'grey'

        totalprice = 0
        taxprice = 0
        subprice = 0
        feeprice = 0
        totalred.textContent = `$${totalprice.toFixed(2)}`
        totalprice = subprice + taxprice + feeprice
        sub.textContent = `$${subprice.toFixed(2)}`
        tax.textContent = `$${taxprice.toFixed(2)}`
        fee.textContent = `$${feeprice.toFixed(2)}`
    }
}

lengthcart()
paymentbtn.addEventListener('click', function(){
    if(cart.length > 0){
        window.location = './payment.html'
    }else{
        alert('კალათა ცარიელია!')
    }
})
