// Toggle Button
const donateButton = document.getElementById("btn-donate");
const historyButton = document.getElementById("btn-history");

donateButton.addEventListener("click", function(){
    donateButton.classList.add('bg-[#B4F461]', 'text-black');
    donateButton.classList.remove('bg-gray-300', 'text-black');
    historyButton.classList.remove('bg-[#B4F461]', 'text-black');
    historyButton.classList.add('bg-gray-300', 'text-black');
    showSectionById("donate-section")
})
historyButton.addEventListener("click", function(){
    historyButton.classList.add('bg-[#B4F461]', 'text-white');
    historyButton.classList.remove('bg-gray-300', 'text-black');
    donateButton.classList.remove('bg-[#B4F461]', 'text-white');
    donateButton.classList.add('bg-gray-300', 'text-black');
    showSectionById("history-section")
})





