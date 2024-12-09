document.getElementById('donate-now-btn').addEventListener('click', function () {
    handleDonation('donate-input-amount', 'total-donate-amount', 'balance-amount');
})
document.getElementById('donate-now-btn-2').addEventListener('click', function () {
    handleDonation('donate-input-amount-2', 'total-donate-amount-2', 'balance-amount')
    console.log(3)
})
document.getElementById('donate-now-btn-3').addEventListener('click', function () {
    handleDonation('donate-input-amount-3', 'total-donate-amount-3', 'balance-amount')
    console.log(3)
})

document.getElementById('donation-btn').addEventListener('click', function () {
    showSectionById('donation-section')
})
document.getElementById('history-btn').addEventListener('click', function () {
    showSectionById('history-section')
})