function placeOrder() {

    const name = document.getElementById("name").value;
    const item = document.getElementById("item").value;
    const quantity = document.getElementById("quantity").value;

    const total = item * quantity;

    if (name == "") {
        document.getElementById("message").innerHTML =
            "Please enter your name.";
    } else {
        document.getElementById("message").innerHTML =
            "Thank you, " + name + "! Your total is $" + total + ".";
    }
}