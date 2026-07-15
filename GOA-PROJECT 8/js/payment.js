console.log(JSON.parse(localStorage.getItem('cart')))
let cart = JSON.parse(localStorage.getItem('cart'))
let totalred = document.getElementById('totalred');
let cartlen = document.getElementById('cartlen');
cartlen.textContent = cart.length
let sub = document.getElementById('sub');
let tax = document.getElementById('Tax');
let fee = document.getElementById('fee');
let name = document.getElementById('name')
let cardnumber = document.getElementById('cardnumber')
let cvv = document.getElementById('cvv')
let mmyy = document.getElementById('mmyy')
let street = document.getElementById('street')
let city = document.getElementById('city')
let postal = document.getElementById('postal')
let visa = document.getElementById('visa')
let master = document.getElementById('master')
let paymentbtn = document.querySelector('#paymentbtn')
let redbgcartlength = document.querySelector('.redbgcartlength')
let form = document.querySelector('form')
let totalprice = 0
let taxprice = 0
let subprice = 0
let feeprice = 0
let cityt = false
let postalt = false
let namet = false
let cardt = false
let cvvt = false
let mmyyt = false
let streett = false


function addcart(){
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
    })
}

addcart()

function render(){
    let value = cardnumber.value.split(" ").join("");
    let res = "";
    if(value[0] === '4'){
        master.style.opacity = '0'
        visa.style.transform = 'translateX(60px)'
    }else{
        master.style.opacity = '1'
        visa.style.transform = 'translateX(0px)'

    }
    if(value[0] === '5'){
        visa.style.opacity = '0'
    }else{
        visa.style.opacity = '1'
    }
}
render()


cardnumber.addEventListener("input", function () {
    let value = cardnumber.value.split(" ").join("");
    let res = "";
    if(value[0] === '4'){
        master.style.opacity = '0'
        visa.style.transform = 'translateX(60px)'
    }else{
        master.style.opacity = '1'
        visa.style.transform = 'translateX(0px)'
    }
    if(value[0] === '5'){
        visa.style.opacity = '0'
    }else{
        visa.style.opacity = '1'
    }
    if(value.length >= 16){
        value = value.slice(0, 16)
    }
    if(value.length === 0){
        cardnumber.style.border = '1px solid red'
        cardt = false
    }
    if(isNaN(value)){
        cardnumber.style.border = '1px solid red'
        cardt = false
    }else{
        cardnumber.style.border = '1px solid #313440'
        cardt = true
    }

    
    for (let i = 0; i < value.length; i++) {
        if (i != 0 && i % 4 === 0) {
            res += " ";
        }
        res += value[i];
    }
    

    cardnumber.value = res;
});

name.addEventListener('input', function(){
    if(name.value.trim() === "" || !isNaN(name.value)){
        name.style.border = '1px solid red'
        namet = false
    }else{
        name.style.border = '1px solid #313440'
        namet = true
    }
})

mmyy.addEventListener('input', function(){
    if(mmyy.value.length > 5){
        mmyy.style.border = '1px solid red'
    }else{
        mmyy.style.border = '1px solid #313440'
        mmyyt = true
    }
})

cvv.addEventListener('input', function(){
    if(isNaN(cvv.value)){
        cvv.style.border = '1px solid red'
    }else if(cvv.value.length > 3){
        cvv.style.border = '1px solid red'
    }else{
        cvv.style.border = '1px solid #313440'
        cvvt = true
    }
})

street.addEventListener('input', function(){
    if(street.value.length <=3){
        street.style.border = '1px solid red'
    }else{
        street.style.border = '1px solid #313440'
        streett = true
    }
})
city.addEventListener('input', function(){
    if(city.value.length <=1){
        city.style.border = '1px solid red'
    }else{
        city.style.border = '1px solid #313440'
        cityt = true
    }
})
postal.addEventListener('input', function(){
    if(isNaN(postal.value)){
        postal.style.border = '1px solid red'
    }else{
        postal.style.border = '1px solid #313440'
        postalt = true
    }
})

function exa(){
    if(isNaN(postal.value)){
        postal.style.border = '1px solid red'
        postalt = false
    }else{
        postal.style.border = '1px solid #313440'
        postalt = true
    }
    if(!isNaN(city.value)){
        city.style.border = '1px solid red'
        cityt = false
    }else if(city.value.length <=1){
        city.style.border = '1px solid red'
        cityt = false
    }else{
        city.style.border = '1px solid #313440'
        cityt = true
    }
    
    street.style.border = '1px solid #313440'
    streett = true
    
    if(isNaN(cvv.value)){
        cvv.style.border = '1px solid red'
        cvvt = false
    }else if(cvv.value.length > 3){
        cvv.style.border = '1px solid red'
        cvvt = false
    }else{
        cvv.style.border = '1px solid #313440'
        cvvt = true
    }
    if(mmyy.value.length > 5){
        mmyy.style.border = '1px solid red'
        mmyyt = false
    }else{
        mmyy.style.border = '1px solid #313440'
        mmyyt = true
    }
    if(name.value.trim() === "" || !isNaN(name.value)){
        name.style.border = '1px solid red'
        namet = false
    }else{
        name.style.border = '1px solid #313440'
        namet = true
    }  
    let value = cardnumber.value.split(" ").join("");
    let res = "";
    if(value[0] === '4'){
        master.style.opacity = '0'
        visa.style.transform = 'translateX(60px)'
    }else{
        master.style.opacity = '1'
        visa.style.transform = 'translateX(0px)'
    }
    if(value[0] === '5'){
        visa.style.opacity = '0'
    }else{
        visa.style.opacity = '1'
    }
    if(value.length >= 16){
        value = value.slice(0, 16)
    }
    if(isNaN(value)){
        cardnumber.style.border = '1px solid red'
        cardt = false
    }else{
        cardnumber.style.border = '1px solid #313440'
        cardt = true
    }
    if(name.value.length === 0){
        name.style.border = '1px solid red'
    }
    if(cardnumber.value.length === 0){
        cardnumber.style.border = '1px solid red'
    }
    if(cvv.value.length === 0){
        cvv.style.border = '1px solid red'
    }
    if(mmyy.value.length === 0){
        mmyy.style.border = '1px solid red'
    }
    if(street.value.length === 0){
        street.style.border = '1px solid red'
    }
    if(city.value.length === 0){
        city.style.border = '1px solid red'
    }
    if(postal.value.length === 0){
        postal.style.border = '1px solid red'
    }

    
    for (let i = 0; i < value.length; i++) {
        if (i != 0 && i % 4 === 0) {
            res += " ";
        }
        res += value[i];
    }
    

    cardnumber.value = res;
}

paymentbtn.addEventListener('click', function(){
    exa()
    if(streett && postalt && namet && cityt && cvvt && mmyyt && cardt && totalprice !== 0){
        alert('წარმატებით შეიძინეთ პროდუქტი!')
        cart = []
        localStorage.setItem('cart', JSON.stringify(cart))
        form.reset()
        subprice = 0
        taxprice = 0
        cartlen.textContent = cart.length
        addcart()

    }else if(cart.length === 0){
        alert('კალათა ცარიელია!')
        name.style.border = '1px solid #313440'
        form.reset()
    }else{
        alert('შეავსეთ ყველა ველი!')
    }
})
redbgcartlength.addEventListener('click', function(){
    window.location = './yourcart.html'
})