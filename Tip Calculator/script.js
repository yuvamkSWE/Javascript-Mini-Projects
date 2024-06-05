let finalAmount = 0;

function calculate() {
    const orderAmount = parseFloat(document.querySelector('.js-order-amount').value);
    let tipPercentage = parseFloat(document.querySelector('.js-tip-percentage').value);
    
    if (isNaN(tipPercentage)) {
        tipPercentage = 0;
    }

    if (!isNaN(orderAmount) && orderAmount > 0) {
        finalAmount = orderAmount + (orderAmount * (tipPercentage / 100));
        finalAmount = finalAmount.toFixed(2); // round to 2 decimal places
    } else {
        finalAmount = 0;
    }
}

function render() {
    const finalAmountElement = document.querySelector('.js-final-amount');
    finalAmountElement.innerHTML = `<p>The final amount is: $${finalAmount} </p>`;
    finalAmountElement.classList.add('css-final-amount');
}

document.querySelector('.js-calc').addEventListener('click', () => {
    calculate();
    render();
});

// Add event listeners to the tip buttons
document.querySelectorAll('.tip-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const tipPercentage = event.target.getAttribute('data-tip');
        document.querySelector('.js-tip-percentage').value = tipPercentage;
    });
});
