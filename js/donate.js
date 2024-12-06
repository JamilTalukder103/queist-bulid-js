document.getElementById('donate-now-btn').addEventListener('click', function () {
    const donateInputAmount = getInputValueById('donate-input-amount');

    const totalDonateAmount = getElementValueById('total-donate-amount');
    const balanceAmount = getElementValueById('balance-amount')
    const totalAmount = donateInputAmount + totalDonateAmount;

    setElemntByText('total-donate-amount', totalAmount)
    const total = balanceAmount - donateInputAmount;

    setElemntByText('balance-amount', total)

})