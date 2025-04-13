let orderData = JSON.parse(localStorage.getItem("order"));
let receiptDiv = document.getElementById("receipt");

if (orderData) {
    receiptDiv.innerHTML = `
        <p><strong>Name:</strong> ${orderData.Firstname} ${orderData.Lastname}</p>
        <p><strong>Phone:</strong> ${orderData.phone}</p>
        <p><strong>Email:</strong> ${orderData.email}</p>
        <h3>Ordered Items:</h3>
    `;
    let total = 0;
    orderData.items.forEach(item => {
        let cost = item.quantity * item.price;
        total += cost;
        receiptDiv.innerHTML += `<p>${item.quantity} kg of ${item.name} - $${cost}</p>`;
    });
    receiptDiv.innerHTML += `<h3>Total: $${total}</h3>`;
}