function criaCalculadora() {
    const display = document.querySelector('.display');


    document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.classList.contains('btn-num')) {
            display.value += el.innerText;
        }

        if (el.classList.contains('btn-clear')) {
            display.value = '';
        }

        if (el.classList.contains('btn-del')) {
            display.value = display.value.slice(0, -1);
        }

        if (el.classList.contains('btn-eq')) {
            let conta = display.value;
            try {

            conta = eval(conta);

            if(!conta){
                alert('Conta inválida!');
                return
            }

            display.value = conta;

            } catch (e) {
                alert('Conta inválida!');
            }
        }
    });
}

criaCalculadora();