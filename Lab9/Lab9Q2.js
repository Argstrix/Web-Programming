const seats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let s1 = 0;
let s2 = 5;
let table = `<table padding="10px" border="2"> <tr><th>&emsp;Name&emsp;</th><th>&emsp;Class&emsp;</th><th>&emsp;Seat Number&emsp;</th></tr>`;


function book() {
    let Name = document.getElementById(`Name`).value;
    let Class = document.getElementById(`Class`).value;
    
    if (Class == 1) {
        if (seats[4] == 0) {
            seats[s1] = 1;
            s1++;
            table += `<tr><td>${Name}</td><td>First-Class</td><td>${s1}</td></tr>`;
            document.getElementById("table").innerHTML = table;
        } else if (seats[4] == 1 && seats[9] == 0) {
            let choice = prompt("Seats are full in First Class. Do you accept to be placed in Economy Class?");
            if (choice.toLowerCase() === "yes") {
                seats[s2] = 1;
                s2++;
                table += `<tr><td>${Name}</td><td>Economy</td><td>${s2}</td></tr>`;
                document.getElementById("table").innerHTML = table;
            }
        } else {
            alert("Sorry! All seats are full.");
        }
    }
    
    if (Class == 2) {
        if (seats[9] == 0) {
            seats[s2] = 1;
            s2++;
            table += `<tr><td>${Name}</td><td>Economy</td><td>${s2}</td></tr>`;
            document.getElementById("table").innerHTML = table;
        } else if (seats[4] == 0 && seats[9] == 1) {
            let choice = prompt("Seats are full in Economy Class. Do you accept to be placed in First Class?");
            if (choice.toLowerCase() === "yes") {
                seats[s1] = 1;
                s1++;
                table += `<tr><td>${Name}</td><td>First-Class</td><td>${s1}</td></tr>`;
                document.getElementById("table").innerHTML = table;
            }
        } else {
            alert("Sorry! All seats are full.");
        }
    }
}

