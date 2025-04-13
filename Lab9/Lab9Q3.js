function calculateBMI() {
    var gender = document.getElementById('gender').value;
    var weight = parseFloat(document.getElementById('weight').value);
    var feet = parseFloat(document.getElementById('feet').value);
    var inches = parseFloat(document.getElementById('inches').value);
    var heightInches = (feet * 12) + inches;
    var heightInchesSquared = Math.pow(heightInches, 2);
    var bmi;
    bmi = (703 * weight) / heightInchesSquared;
    document.getElementById('BMI').innerHTML = bmi.toFixed(2);
    if (gender === "male") {
       if (bmi<17.50){
        alert("Anorexia");
       }
       else if(bmi>17.50&&bmi<=19.10){
        alert("Underweight");
       }
       else if(bmi>19.10&&bmi<=25.80){
        alert("Ideal Range");
       }
       else if(bmi>25.80&&bmi<=27.30){
        alert("Marginally Overweight Range");
       }
       else if(bmi>27.30&&bmi<=32.30){
        alert("Overweight Range");
       }
       else if(bmi>32.30){
        alert("Obese range");
       }
    } else if (gender === "female") {
        if (bmi<17.50){
        alert("Anorexia");
       }
       else if(bmi>17.50&&bmi<=20.70){
        alert("Underweight");
       }
       else if(bmi>20.70&&bmi<=26.40){
        alert("Ideal Range");
       }
        else if(bmi>26.40&&bmi<=27.80){
        alert("Marginally Overweight Range");
       }
       else if(bmi>27.80&&bmi<=31.10){
        alert("Overweight Range");
       }
       else if(bmi>31.10){
        alert("Obese range");
       }
    } 
}