function handleDonation(inputId, totalDonateId, balanceId) {
    const donateInputAmount = getInputValueById(inputId)
    if (isNaN(donateInputAmount) || donateInputAmount < 0) {
        alert('failed to donate')
        return;
    }
    const totalDonateAmount = getElementValueById(totalDonateId)
    const accountBalance = getElementValueById(balanceId)
    if (donateInputAmount > accountBalance) {
        alert('you have not enough money')
        return
    }
    const donateAmount = donateInputAmount + totalDonateAmount;
    console.log(donateAmount)
    setElemntByText(totalDonateId, donateAmount);
    const remaningBalance = accountBalance - donateInputAmount;
    console.log(remaningBalance)

    setElemntByText(balanceId, remaningBalance)
    openModal()

}