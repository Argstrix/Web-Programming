function updateVal(){
        
    let x = document.getElementById("Adults").value 
    let y = document.getElementById("Children").value

    let total = parseInt(x)*10 + parseInt(y)*5
    console.log(total)
    document.getElementById("output").value = total
}

