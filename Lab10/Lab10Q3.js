document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let Firstname = document.getElementById("Firstname").value;
    let Lastname = document.getElementById("Lastname").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let items = document.querySelectorAll(".item");
    let orderDetails = [];

    items.forEach((item, index) => {
        if (item.checked) {
            let quantity = document.getElementsByClassName("qty")[index].value || 1;
            let price = item.getAttribute("data-price");
            orderDetails.push({
                name: item.value,
                quantity: quantity,
                price: price
            });
        }
    });

    let orderData = {
        Firstname: Firstname,
        Lastname: Lastname,
        phone: phone,
        email: email,
        items: orderDetails
    };

    localStorage.setItem("order", JSON.stringify(orderData));
    window.location.href = "Lab10Q3Receipt.html";
});
