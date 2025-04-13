document.addEventListener("DOMContentLoaded", function () {
    function updateTime() {
        let now = new Date();
        document.getElementById("Time").textContent =
            "Time: " + now.toLocaleTimeString();
    }
    setInterval(updateTime, 1000);
    updateTime();

    document
        .getElementById("Test")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            clearErrors();
            let valid = validateForm();
            if (valid) printFormData();
        });

    function validateField(input) {
        let errorTd =
            input.parentElement.parentElement.querySelector(".error-message");
        if (errorTd) errorTd.remove(); // Remove previous error

        function showError(message) {
            let errorTd = document.createElement("td");
            errorTd.classList.add("error-message");
            errorTd.style.color = "red";
            errorTd.textContent = message;
            input.parentElement.parentElement.appendChild(errorTd);
        }

        if (input.id === "name") {
            if (!input.value.trim()) showError("Required");
            else if (input.value.length > 15) showError("Max 15 chars");
        }

        if (input.id === "Address") {
            if (!input.value.trim()) showError("Required");
        }

        if (input.id === "Zip") {
            if (!input.value.match(/^\d{5,10}$/))
                showError("5-10 digits required");
        }

        if (input.id === "Phone") {
            if (!input.value.match(/^\d{10}$/))
                showError("Exactly 10 digits required");
        }

        if (input.id === "Email") {
            if (!input.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
                showError("Invalid email");
        }

        if (input.id === "password") {
            if (
                !input.value.match(
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/
                )
            ) {
                showError("8-15 chars, 1 letter, 1 number, 1 special");
            }
        }

        if (input.id === "verifyPass") {
            let password = document.getElementById("password").value;
            if (input.value !== password) showError("Passwords do not match");
        }

        if (input.id === "pan") {
            if (!input.value.match(/^[0-9]{10}$/))
                showError("Invalid PAN format");
        }
    }

    document.querySelectorAll("input, textarea, select").forEach((input) => {
        input.addEventListener("blur", function () {
            validateField(input);
        });

        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Prevent form submission
                let formElements = Array.from(
                    document.querySelectorAll("input, textarea, select")
                );
                let index = formElements.indexOf(event.target);
                if (index !== -1 && index < formElements.length - 1) {
                    formElements[index + 1].focus();
                }
            }
        });
    });

    function clearErrors() {
        document
            .querySelectorAll(".error-message")
            .forEach((el) => el.remove());
    }

    function printFormData() {
        let name = document.getElementById("name").value;
        let address = document.getElementById("Address").value;
        let zip = document.getElementById("Zip").value;
        let phone = document.getElementById("Phone").value;
        let email = document.getElementById("Email").value;
        let country = document.getElementsByName("country")[0].value;
        let genderElements = document.getElementsByName("gender");
        let gender = Array.from(genderElements).find((el) => el.checked);
        let preferenceElements = document.getElementsByName("Color");
        let preferences = Array.from(preferenceElements)
            .filter((el) => el.checked)
            .map((el) => el.id)
            .join(", ");

        console.log("Form Data:");
        console.log("Name:", name);
        console.log("Address:", address);
        console.log("Zip Code:", zip);
        console.log("Phone:", phone);
        console.log("Email:", email);
        console.log("Country:", country);
        console.log("Gender:", gender ? gender.id : "Not selected");
        console.log("Preferences:", preferences || "None");
    }
});
