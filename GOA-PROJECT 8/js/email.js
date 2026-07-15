let mail = document.getElementById('mail')
let form = document.querySelector('#form')



form.addEventListener('submit', function(e){
    e.preventDefault()
    if(!mail.value.includes('@gmail.com')){
        alert('მეილი არასწორია!')
    }else{
        alert('წარმატები გაიგზავნა მოთხოვნა')
        form.reset()
    }
})