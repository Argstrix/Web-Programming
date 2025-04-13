data = [55,62,68,74,59,45,41,58,60,67,65,78,82,88,91,92,90,93,87,80,78,79,72,68,61,59,55,65]
console.log(data.length)
tbodyElement = document.getElementById("table_insert");
let Hot = 0,Cold = 0,Pleasant=0
for(i = 0;i<data.length;i++){
    let row = document.createElement("tr");
    tbodyElement.appendChild(row);
    let td1 = document.createElement("td");
    row.appendChild(td1)
    let td2 = document.createElement("td");
    row.appendChild(td2)
    let td3 = document.createElement("td");
    row.appendChild(td3)
    td1.textContent = i+1;
    td2.textContent = data[i];
    if(data[i]>=85){
        td3.textContent = "Hot"
        Hot++;
    }else if(data[i]>=60 && data[i]<=84){
        td3.textContent = "Pleasant"
        Pleasant++;
    }else{
        td3.textContent = "Cold"
        Cold++;
    }
    tbodyElement.appendChild(row);
}

table2 = document.getElementById("count");
table2.rows[0].cells[1].textContent=Hot;
table2.rows[1].cells[1].textContent=Pleasant;
table2.rows[2].cells[1].textContent=Cold;

