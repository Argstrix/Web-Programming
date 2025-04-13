Data = [
    [1,"Alen",39],
    [2,"Deena",47],
    [3,"Diana",21],
    [4,"Jack",54],
    [5,"Jain",23],
    [6,"Kelvin",61],
    [7,"Louis",69],
    [8,"Rex",49]
];



function dispSorted(){
    let arr = [...Data].sort((a,b)=>b[2]-a[2]);
    table_frame = document.getElementById("Frame")
    table_frame.innerHTML   =""
    table = document.createElement("table")
    table.border = 1
    let header = table.createTHead();
    headerRow = header.insertRow();
    let Params = ["PID","Name","Age"];
    Params.forEach(element => {
        let th = document.createElement("th")
        th.textContent=element
        headerRow.appendChild(th)
    });

    let tbody = table.createTBody();
    arr.forEach((row)=>{
        let tr = tbody.insertRow()
        row.forEach((element)=>{
            let td = tr.insertCell();
            td.textContent=element;
        })
    })
    table_frame.appendChild(table);
}


function fetchRecord() {
    let frame = document.getElementById("Frame");
    frame.innerHTML = `
        <div>
            <form id="searchForm">
                <fieldset>
                    <label for="PID">Enter the PID to search:</label>
                    <input type="number" name="PID" id="pid" min="0">
                    <button type="submit">Search</button>
                    <div id="result"></div>
                </fieldset>
            </form>
            
        </div>`;

    document.getElementById("searchForm").addEventListener("submit", function(event) {
        event.preventDefault(); 
        let user_PID = parseInt(document.getElementById("pid").value);
        let record = Data.find((record) => record[0] === user_PID);
        let resultDiv = document.getElementById("result");
        
        if (record) {
            let name = record[1];
            let age = record[2];
            resultDiv.innerHTML = `<p>Record Found!<br>Name: ${name}<br>Age: ${age}</p>`;
        } else {
            resultDiv.innerHTML = `<p>No records found</p>`;
        }
    });
}


function findRange(){
    let frame = document.getElementById("Frame")
    frame.innerHTML=`
        <div>
            <form id = "rangeInput">
                <fieldset>
                    <label for="Range">Enter start and end Values:</label>
                    <input type="number" name="start" id="start" min="0" max="100"> -
                    <input type="number" name = "end"  id = "end" min="0" max="100">
                    <button type = "submit" name = "Submit">Submit</button>
                    <div id="result"></div>
                </fieldset>
            </form>
        </div>
    `
    document.getElementById("rangeInput").addEventListener("submit",function(event){
        event.preventDefault();
        let start = parseInt(document.getElementById("start").value);
        let end = parseInt(document.getElementById("end").value);
        let resultDiv = document.getElementById("result");
        resultDiv.innerHTML=""
        let record = Data.filter((record)=>record[2]>=start && record[2]<=end);
        if (record) {
            for(let i = 0;i<record.length;i++){
                let row = record[i];
                let pid = row[0]
                let name = row[1];
                let age = row[2];
                resultDiv.innerHTML += `<p>Record Found!<br>Pid: ${pid}<br>Name: ${name}<br>Age: ${age}</p>`;
            }
        } else {
            resultDiv.innerHTML = `<p>No records found</p>`;
        }

    })
}