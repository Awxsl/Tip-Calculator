const bill = document.querySelector('#bill');
const tip5 = document.querySelector('.tip5');
const tip10 = document.querySelector('.tip10');
const tip15 = document.querySelector('.tip15');
const tip20 = document.querySelector('.tip20');
const tip25 = document.querySelector('.tip25');
const tipCustom = document.querySelector('.tip-custom');
const numberOfPeople = document.querySelector('.numPeople');
const tipAmount = document.querySelector('.amount');
const totalAmount = document.querySelector('.total');
const resetBtn = document.querySelector('.reset-btn');
const selectTipContainer = document.querySelector('.buttons');


selectTipContainer.addEventListener('click', selectTip);
resetBtn.addEventListener('click', resetAll);
bill.addEventListener('keyup', checkAmount);
numberOfPeople.addEventListener('keyup', checkAmount);
tipCustom.addEventListener('keyup', checkAmount);

function selectTip(e) {
    if(e.target != tip5.parentElement) {
        removeBtnHighlight();
    } 
    if(e.target === tip5) {
        e.target.id = 'active';
    } else if(e.target === tip10) {
        e.target.id = 'active';
    } else if(e.target === tip15) {
        e.target.id = 'active';
    } else if(e.target === tip20) {
        e.target.id = 'active';
    } else if(e.target === tip25) {
        e.target.id = 'active';
    } else if(e.target === tipCustom) {
        e.target.placeholder = '';
    }
    checkAmount();
}

function removeBtnHighlight(e) {
        tip5.id = '';
        tip10.id = '';
        tip15.id = '';
        tip20.id = '';
        tip25.id = '';
}

function resetAll() {
    bill.value = '';
    numberOfPeople.value = '';
    removeBtnHighlight();
    tipCustom.value = '';
    totalAmount.textContent = '$0.00';
    tipAmount.textContent = '$0.00';
}

function checkAmount() {
    if(bill.value === '' || numberOfPeople.value === '') {
        totalAmount.textContent = '$0.00';
        tipAmount.textContent = '$0.00';
    } 

    if(bill.value != '') {
        if(numberOfPeople.value != '') {
            if(hasSelectedTip()) {
                const tip = Number(getTip().toFixed(2));
                totalAmount.textContent = `$${((Number(bill.value) + tip) / Number(numberOfPeople.value)).toFixed(2)}`;
                tipAmount.textContent = `$${(tip / numberOfPeople.value).toFixed(2)}`;
            }
        }
    }
}

function hasSelectedTip() {
    if(tip5.id != '' || tip10.id != '' || tip15.id != '' || tip20.id != '' || tip25.id != '') {
        return true;
    } else if(tipCustom.value != '') {
        return true;
    } else 
        return false;
}

function getTip() {
    if(tip5.id != '') {
        return 0.05 * bill.value;
    } else if(tip10.id != '') {
        return 0.10 * bill.value;
    } else if(tip15.id != '') {
        return 0.15 * bill.value;
    } else if(tip20.id != '') {
        return 0.20 * bill.value;
    } else if(tip25.id != '') {
        return 0.25 * bill.value;
    } else if(tipCustom.value != '') {
        console.log(tipCustom.value);
        return tipCustom.value/100 * bill.value;
    }
}