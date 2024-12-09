function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const value = parseFloat(inputValue)
    return value;
}

function getElementValueById(id) {
    const elementValue = document.getElementById(id).innerText;
    const value = parseFloat(elementValue);
    return value;

}

function setElemntByText(id, value) {
    const setElement = document.getElementById(id).innerText = value;
    return setElement;
}


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
    setElemntByText(totalDonateId, donateAmount);
    const title = document.querySelector('.card-title').innerText;
    console.log(title)
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    const div = document.createElement('div');
    div.innerHTML = `
      <div class="border-2 bg-slate-100 rounded-lg mb-3 p-3">
        <p class="text-2xl font-semibold mb-2">${donateInputAmount} Taka is Donated for ${title}</p>
        <p class="font-semibold">${currentDateTime}</p> 
      </div>
    `;
    document.getElementById('history-container').appendChild(div);

    const remaningBalance = accountBalance - donateInputAmount;
    console.log(remaningBalance)

    setElemntByText(balanceId, remaningBalance)
    openModal()

}

function showSectionById(id) {
    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}