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



    }
    document.getElementById("donationModal").classList.add("modal-open");

})

// Close Modal Function
function closeModal() {
    document.getElementById("donationModal").classList.remove("modal-open");
}
