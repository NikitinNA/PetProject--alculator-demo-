let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9','.'];
const action = ['-','+','*','/'];

// экран

const out = document.querySelector('.input');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.clean').onclick = clearAll;

document.querySelector('.container').onclick = (event) => {
    if(!event.target.classList.contains('item')) return;

    if(event.target.classList.contains('clear')) return;

    out.textContent = '';

    const key = event.target.textContent;

    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
            console.log(a,b, sign);
        }
        else if (a!=='' && b!=='' && finish) {
            b = key;
            finish = false; 
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a,b, sign);
        return;
    }

    if (action.includes(key)) {
        sign = key;
        console.log(a, b, sign);
        out.textContent = sign;
        console.log(a,b, sign);

        return;

    }

    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+": 
                a = (+a) + (+b);
                break;
            case "-": 
                a = a - b;
                break;
            case "*": 
                a = a * b;
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                } 
                a = a / b;
                break;
            
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }

    
}

