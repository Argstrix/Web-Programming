function makeChanges() {
    
    let title = document.getElementById("title");
    title.textContent = "Updated Title";

    let usernameField = document.getElementsByName("username")[0];
    usernameField.value = "John Doe";

    let genderRadios = document.getElementsByName("gender");
    for (let radio of genderRadios) {
        if (radio.checked) {
            console.log("Selected Gender:", radio.value);
        }
    }

    let paragraphs = document.getElementsByTagName("p");
    console.log("Total <p> elements:", paragraphs.length);

    let listItems = document.getElementsByTagName("li");
    for (let item of listItems) {
        console.log("List Item:", item.textContent);
    }

    let inputFields = document.getElementsByClassName("input-field");
    for (let field of inputFields) {
        field.style.backgroundColor = "lightblue";
    }

    let firstInfoPara = document.querySelector(".info");
    firstInfoPara.textContent = "This is the first info paragraph";

    let firstRadio = document.querySelector("input[name='gender']");
    firstRadio.checked = true;

    let allInfoParas = document.querySelectorAll(".info");
    allInfoParas.forEach(para => console.log("Info Text:", para.textContent));

    let checkboxes = document.querySelectorAll(".hobby");
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
        console.log("Checked Hobby:", checkbox.value);
    });
}
