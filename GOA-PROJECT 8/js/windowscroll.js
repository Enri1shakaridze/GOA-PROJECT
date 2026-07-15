let header = document.querySelector('header');
let article2_div1 = document.querySelector('.article2-div1')
let article2_div2 = document.querySelector('.article2-div2')
let article3menudiv1 = document.querySelector('.article3-menu-div1');
let article3menudiv2 = document.querySelector('.article3-menu-div2');
let article3Menures = document.querySelector('.article3-Menu-result')

window.addEventListener('scroll', function () {
    if (scrollY > 5) {
        header.style.backgroundColor = '#313440'
        header.style.borderBottom = '1px solid #f9f9f9'
        header.style.zIndex = '4'
    }
    else {
        header.style.borderBottom = 'none'
        header.style.zIndex = '1'
        header.style.backgroundColor = '#010204'
    }
    // ----------------------
    if (scrollY >= 350) {
        article2_div1.id = "scrolopi";
    } else {
        article2_div1.id = "scrolopa";
    }
    // ----------------------
    if (scrollY >= 490) {
        article2_div2.id = 'scrolopi'
    } else {
        article2_div2.id = 'scrolopa'
    }
    // ----------------------
    if(scrollY >= 900 && window.innerWidth >= 1270){
        article3menudiv1.id = 'scrolopi'
    }else if(scrollY >=1350 && window.innerWidth >= 400){
        article3menudiv1.id = 'scrolopi'
    }else if(scrollY >=1680 && window.innerWidth >= 300){
        article3menudiv1.id = 'scrolopi'
    }
    else{
        article3menudiv1.id = 'scrolopa'
    }
    // ----------------------
    if(scrollY >= 950 && window.innerWidth >= 1270){
        article3menudiv2.id = 'scrolopi'
    }else if(scrollY >= 1430 && window.innerWidth >= 400){
        article3menudiv2.id = 'scrolopi'
    }else if(scrollY >=1880 && window.innerWidth >= 300){
        article3menudiv2.id = 'scrolopi'
    }
    else{
        article3menudiv2.id = 'scrolopa'
    }
    // ----------------------
    if(scrollY >= 1050 && window.innerWidth >= 1270){
        article3Menures.id = 'scrolopi'
    }else if(scrollY >= 1630 && window.innerWidth >= 400){
        article3Menures.id = 'scrolopi'
    }else if(scrollY >=1990 && window.innerWidth >= 300){
        article3Menures.id = 'scrolopi'
    }
    else{
        article3Menures.id = 'scrolopa'
    }
})
