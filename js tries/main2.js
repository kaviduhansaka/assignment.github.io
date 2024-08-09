

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const disc = document.getElementById("product-brief");
let productDetails = ''; // Accumulate product details
let total = 0;

cart.forEach((item) => {
    productDetails += `Product name: ${item.name}, Price: ${item.total}\n`;
    total = total + item.total;
});

disc.innerText = `${productDetails}\n   Total: ${total}` // Set innerText once


// Apply styling
disc.style.fontFamily = 'Arial, sans-serif';
disc.style.fontSize = '16px';
disc.style.color = '#333';
disc.style.backgroundColor = '#f9f9f9';
disc.style.padding = '10px';
disc.style.border = '1px solid #ddd';
disc.style.borderRadius = '5px';
disc.style.lineHeight = '1.5';


document.getElementById("checkout-btn").addEventListener("click", function() {
   
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const dateInputValue = document.getElementById("date-input").value;
    const zipCode = document.getElementById("zip-code").value;
    const nameOnCard = document.getElementById("name-on-card").value;
    const cardNumber = document.getElementById("card-number").value;
    const expMonth = document.getElementById("exp-month").value;
    const expYear = document.getElementById("exp-year").value;
    const cvv = document.getElementById("cvv").value;

   
    if (!fullName || !email || !address || !city || !dateInputValue || !zipCode || !nameOnCard || !cardNumber || !expMonth || !expYear || !cvv) {
        alert("All fields must be filled out.");
        return;
    }

    function showCustomAlert(message) {
        const alertBox = document.getElementById("customAlert");
        const alertMessage = document.getElementById("alertMessage");
        const okButton = document.querySelector(".custom-alert-content button");

        alertMessage.textContent = message;
        alertBox.style.display = "flex"; 

    
        okButton.addEventListener("click", closeAlert);
    }

    function closeAlert() {
        const alertBox = document.getElementById("customAlert");
        alertBox.style.display = "none"; 
    }

    // Calculate the delivery date
    const date = new Date(dateInputValue); 
    date.setDate(date.getDate() + 10);

    const newDate = date.toISOString().split('T')[0];

    console.log(`Your items will be delivered on: ${newDate}`);

    
    showCustomAlert(`Thank you for your purchase. Your items will be delivered on or before ${newDate}`);
});






