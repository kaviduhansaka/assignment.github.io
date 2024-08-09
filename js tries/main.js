console.log("Starting System")
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let fav = JSON.parse(localStorage.getItem('fav')) || [];

//add and minus functioins for the quantity btn
function changeQuantity(button, change) {
    const inputElement = document.getElementById(button);
    let currentValue = parseFloat(inputElement.value);
    if (isNaN(currentValue)) {
        currentValue = 0;
    }
    const newValue = currentValue + change;

    if (newValue >= parseFloat(inputElement.min) && newValue <= parseFloat(inputElement.max)) {
        inputElement.value = newValue.toFixed(1);
    }
}

//array for the products
const products = [
    {name: "APPLE", pricePerKg: 500, loc:"./images/apple.png"},
    {name: "LEMON", pricePerKg: 500, loc:"./images/lemon.png"},
    {name: "GRAPES", pricePerKg: 500, loc:"./images/bunch-of-red-grapes-removebg-preview.png"},
    {name: "PEARS", pricePerKg: 500 ,loc:"./images/pears.png"},
    {name: "MANGO", pricePerKg: 500 , loc:"./images/mango-removebg-preview.png"},
    {name: "ORANGE", pricePerKg: 500, loc:"./images/image-removebg-preview(3).png"},
    {name: "KIWI", pricePerKg: 500, loc:"./images/kiwi.png"},
    {name: "BLUEBERRY", pricePerKg: 500 , loc:"./images/BLUEBERRY.png"},
    {name: "ONION", pricePerKg: 500 , loc:"./images/onion.png"},
    {name: "CARROT", pricePerKg: 500, loc: "./images/CARRROT.png"},
    {name: "POTATO", pricePerKg: 500, loc: "./images/POTATO.png"},
    {name: "BROCCOLI", pricePerKg: 500, loc: "./images/BROCCOLI.png"},
    {name: "GARLIC", pricePerKg: 500, loc: "./images/GARLIC.png"},
    {name: "BRINJAL", pricePerKg: 500, loc: "./images/BRINJL.png"},
    {name: "PUMPKIN", pricePerKg: 500, loc: "./images/PUMPKIN.png"},
    {name: "CABBAGE", pricePerKg: 500, loc: "./images/CABBAGE.png"},
    { name: 'ICE CREAM', pricePerKg: 500, loc: './images/icecream.png' },
    { name: 'BUTTER', pricePerKg: 500, loc: './images/BUTTER.png' },
    { name: 'CHEESE', pricePerKg: 500, loc: './images/CHEESE.png' },
    { name: 'YOGURT', pricePerKg: 500, loc: './images/togurt.png' },
    { name: 'NUTELLA', pricePerKg: 500, loc: './images/NUTELLA.png' },
    { name: 'CHOCOLATE', pricePerKg: 500, loc: './images/chcoco.png' },
    { name: 'POPSICLES', pricePerKg: 500, loc: './images/PPPOPSICLES.png' },
    { name: 'CURD', pricePerKg: 500, loc: './images/CURD.png' },
    { name: 'SPAM', pricePerKg: 500, loc: './images/spam.png' },
    { name: 'PRAWNS', pricePerKg: 500, loc: './images/PRAWNS.png' },
    { name: 'BEEF', pricePerKg: 500, loc: './images/beef.png' },
    { name: 'SALMON', pricePerKg: 500, loc: './images/SALMON.png' },
    { name: 'EGGS', pricePerKg: 500, loc: './images/EGGS.png' },
    { name: 'LOBSTER', pricePerKg: 500, loc: './images/lobster.png' },
    { name: 'BACON', pricePerKg: 500, loc: './images/BACON.png' },
    { name: 'SQUID', pricePerKg: 500, loc: './images/SQUID.png' },
    { name: 'FLOUR', pricePerKg: 500, loc: './images/flour.png' },
    { name: 'VANLLA', pricePerKg: 500, loc: './images/VANILALLLLALALA.png' },
    { name: 'SALT', pricePerKg: 500, loc: './images/SALT.png' },
    { name: 'SAFFRON', pricePerKg: 500, loc: './images/saffron.png' },
    { name: 'HONEY', pricePerKg: 500, loc: './images/HONEY.png' },
    { name: 'YEAST', pricePerKg: 500, loc: './images/YEAST.png' },
    { name: 'SPRINKLE', pricePerKg: 500, loc: './images/SPRINKLES.png' },
    { name: 'COCOA', pricePerKg: 500, loc: './images/cocoa.png' },
];

// function to give an error msg when the amount is types negatively
function addToCart(productIndex) {
    const amount = parseFloat(document.getElementById(`amount-${productIndex}`).value);
    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid number");
        return;
    }

    // the price is calculated  by this
    const product = {
        name: products[productIndex].name,
        amount: amount,
        pricePerKg: products[productIndex].pricePerKg,
        total: amount * products[productIndex].pricePerKg,
        location: products[productIndex].loc,
        favourite: false 
    };

    //getting the array
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTable();
    console.log("Product Added");
}

function addToFav(){
    cart.forEach((item)=>{
        fav.push(item);
        localStorage.setItem('fav', JSON.stringify(fav));
    });
    updateCartTable();
    console.log("Favourites added");
}





//updating the table.. from the array when add cart is clicked

function updateCartTable() {
    const tbody = document.getElementById('table').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';


    cart.forEach((item, index) => {
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = `<img src="${item.location}" style="height:70px; width:auto; display:block; margin:auto;">`;

        row.insertCell(1).innerHTML = item.name;
        const amountCell = row.insertCell(2);
        amountCell.innerHTML = `<input type="number" value="${item.amount}" style= "font-size:23px;" onchange="updateAmount(${index}, this.value)">`;
        row.insertCell(3).innerText = item.pricePerKg.toFixed(3);
        row.insertCell(4).innerText = item.total.toFixed(4);
       
        const deleteCell = row.insertCell(5);
        deleteCell.style.backgroundColor = '#f0f0f0';
        deleteCell.innerHTML = `
            <img 
                src="./images/dustbin.png" 
                style="height:30px; width:30px; filter: grayscale(100%) invert(100%);" 
                onclick="removeRow(${index})"
            >
        `;

        

        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];


        function addToFavorites(favouriteCell) {
            if (!favorites.some(fav => fav.name === product.name)) {
                favorites.push(product);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                console.log("Product added to favorites");
            } else {
                console.log("Product is already in favorites");
            }
        }
        
    });


    //calculating the total for the total on the table
    let total = 0;
    cart.forEach((item) => {
        total += item.total;
    });

    const totalRow = tbody.insertRow();
    totalRow.insertCell(0).colSpan = 4; 
    totalRow.insertCell(0).innerText = 'Total Price(Rs)'; 
    totalRow.insertCell(1).innerText = total.toFixed(4); 
    totalRow.insertCell(1).colSpan = 3; 

    totalRow.style.fontWeight = 'bold';
    totalRow.style.backgroundColor = '#f0f0f0'; 





    const buttonsRow = tbody.insertRow();

    const applyCell = buttonsRow.insertCell(0);
    applyCell.colSpan = 3; // Adjust colspan if needed
    applyCell.innerHTML = '<a id="purchase-button" onclick="applyFav()" style="margin-left:10px;" >Apply favourite</a>';
    applyCell.style.textAlign = 'center';
    
    const favCell = buttonsRow.insertCell(1);
    favCell.colSpan = 3; // Adjust colspan if needed
    favCell.innerHTML = '<a id="purchase-button"  onclick="addToFav()">Add to favourite</a>';
    favCell.style.textAlign = 'left';
    

    // purchase button  at the very end of the table

    const purchaseRow = tbody.insertRow();
    const purchaseCell = purchaseRow.insertCell(0);
    purchaseCell.colSpan = 7; 
    purchaseCell.innerHTML = '<a href="pay.html" id="purchase-button">Purchase</a>'; // Link to the purchase.html page
    purchaseCell.style.textAlign = 'center';
    
    //styling the purchase button
   

// Hover effect for the purchase button
applyCell.addEventListener('mouseover', () => { 
    applyCell.style.transform = 'scale(1)'; 
});

 
favCell.addEventListener('click', (event) => {
    if (cart.length === 0) {
        event.preventDefault(); // Prevent navigation to pay.html
        alert('There are no items selected in the cart.');
    }
});


}

// function to remove the row when the bin is clicked
function removeRow(index) {
    cart.splice(index, 1); 
    localStorage.setItem('cart', JSON.stringify(cart)); 
    updateCartTable(); 
}



function updateAmount(index, newAmount){
    const amount = parseFloat(newAmount);
    if (isNaN(amount) || amount <= 0){
        alert('Please enter a valid amount');
        return;
    }

    cart[index].amount = amount;
    cart[index].total = amount * cart[index].pricePerKg;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTable();
}


//apply favourties

function applyFav() {

    let favItems = JSON.parse(localStorage.getItem('fav')) || [];
   
    favItems.forEach((favItem) => {
        const existingIndex = cart.findIndex(cartItem => cartItem.name === favItem.name);

        if (existingIndex === -1) { 
            cart.push(favItem);
        } else { 
            cart[existingIndex].amount += favItem.amount;
            cart[existingIndex].total = cart[existingIndex].amount * cart[existingIndex].pricePerKg;
        }

        const productIndex = products.findIndex(product => product.name === favItem.name);
        if (productIndex !== -1) {
            const changeInput = document.getElementById(`amount-${productIndex}`);
            if (changeInput) {
                changeInput.value = favItem.amount;
            }
        }
    });


    // Save the updated cart to local storage and update the table
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartTable();
    console.log("Favorites applied to cart");
}


updateCartTable();
