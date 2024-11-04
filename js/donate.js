// donate for noakhali flood
document.getElementById("btn-donate-for-noakhali").addEventListener("click", function () {
    const donateAmount = getInputValue("donate-amount-for-noakhali");
    const previousCollection = getTextValue("total-collection-for-noakhali");
    const myPreviousBalance = getTextValue("my-balance");
    const myNewBalance = myPreviousBalance - donateAmount;
    const updatedCollection = donateAmount + previousCollection;
    const inputFiledLength = document.getElementById("donate-amount-for-noakhali");
    const length = inputFiledLength.value.length;
    if (donateAmount > myPreviousBalance || isNaN(donateAmount) || donateAmount < 0 || length < 0) {
        alert("Wrong")
        return
    }

    else {
        document.getElementById("total-collection-for-noakhali").innerText = updatedCollection;
        document.getElementById("my-balance").innerText = myNewBalance;

        document.getElementById("donate-amount-for-noakhali").value = ""

    }
    document.getElementById("donationModal").classList.add("modal-open");

})

// Close Modal Function
function closeModal() {
    document.getElementById("donationModal").classList.remove("modal-open");
}

// donate for Feni flood
document.getElementById("btn-donate-for-feni").addEventListener("click", function () {
    const donateAmount = getInputValue("donate-amount-for-feni");
    const previousCollection = getTextValue("total-collection-for-feni");
    const myPreviousBalance = getTextValue("my-balance");
    const myNewBalance = myPreviousBalance - donateAmount;
    const updatedCollection = donateAmount + previousCollection;
    const inputFiledLength = document.getElementById("donate-amount-for-feni");
    const length = inputFiledLength.value.length;
    if (donateAmount > myPreviousBalance || isNaN(donateAmount) || donateAmount < 0 || length < 0) {
        alert("Wrong")
        return
    }

    else {
        document.getElementById("total-collection-for-feni").innerText = updatedCollection;
        document.getElementById("my-balance").innerText = myNewBalance;
        document.getElementById("donate-amount-for-feni").value = ""


    }
    document.getElementById("donationModal").classList.add("modal-open");

})

// Close Modal Function
function closeModal() {
    document.getElementById("donationModal").classList.remove("modal-open");
}

// Donate For Quota Movement
document.getElementById("btn-donate-for-quota").addEventListener("click", function () {
    const donateAmount = getInputValue("donate-amount-for-quota");
    const previousCollection = getTextValue("total-collection-for-quota");
    const myPreviousBalance = getTextValue("my-balance");
    const myNewBalance = myPreviousBalance - donateAmount;
    const updatedCollection = donateAmount + previousCollection;
    const inputFiledLength = document.getElementById("donate-amount-for-quota");
    const length = inputFiledLength.value.length;
    if (donateAmount > myPreviousBalance || isNaN(donateAmount) || donateAmount < 0 || length < 0) {
        alert("WronG")
        return
    }

    else {
        document.getElementById("total-collection-for-quota").innerText = updatedCollection;
        document.getElementById("my-balance").innerText = myNewBalance;
        document.getElementById("donate-amount-for-quota").value = ""

    }
    document.getElementById("donationModal").classList.add("modal-open");

})

// Close Modal Function
function closeModal() {
    document.getElementById("donationModal").classList.remove("modal-open");
}
