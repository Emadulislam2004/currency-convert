const haveCurrency = document.querySelector('#haveCurrency');
const convertCurrency = document.querySelector('#convertCurrency');
const amount = document.querySelector('.amount');
const submit = document.querySelector('.submit');
const output = document.querySelector('.card-footer');
let amountPattern = /^[0-9]*$/;

amount.addEventListener('keyup',function(){

    if(amount.value == ''){
        amount.nextElementSibling.innerHTML = `<P class="text-danger">Please input value</p>`
    }else if(amountPattern.test(amount.value) == false){
        amount.nextElementSibling.innerHTML = `<P class="text-warning">Only number allow</p>`
    }else if(amountPattern.test(amount.value) == true){
        amount.nextElementSibling.innerHTML = `<P class="text-success">correct</p>`
    }

})


submit.addEventListener('click', function(){


    let usdTobdt  = '85.74';
    let euroTobdt = '97.52';
    let cadTobdt  = '67.93';
    let pundTobdt  = '116.02';
    


    if(haveCurrency.value == 'POUND'&& convertCurrency.value == 'BDT'){
        
        output.innerHTML =`<p class="text-success m-0">your amount = ${amount.value * pundTobdt} ${ convertCurrency.value}</p>`

    }else if(haveCurrency.value == 'USD'&& convertCurrency.value == 'BDT'){
        
        output.innerHTML =`<p class="text-success m-0">your amount = ${amount.value * usdTobdt} ${ convertCurrency.value}</p>`

    }else if(haveCurrency.value == 'EURO'&& convertCurrency.value == 'BDT'){
        
        output.innerHTML =`<p class="text-success m-0">your amount = ${amount.value * euroTobdt} ${ convertCurrency.value}</p>`

    }else if(haveCurrency.value == 'CAD'&& convertCurrency.value == 'BDT'){
        
        output.innerHTML =`<p class="text-success m-0">your amount = ${amount.value * cadTobdt} ${ convertCurrency.value}</p>`

    }

    haveCurrency.children[0].value;
    convertCurrency.children[0].value;
    amount.value = '';


})

