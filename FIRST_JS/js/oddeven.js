function checkOddEven(){
    const num = parseInt(document.getElementById('number').value, 10);
    if(isNaN(num)){
        document.getElementById('result').innerHTML = "Please Enter a Valid Number";
        return;
    }
    if(num % 2 === 0) {
        document.getElementById('result').innerHTML = num + " is an EVEN Number.";
    }else{ 
        document.getElementById('result').innerHTML = num + " is an ODD Number.";
    }
}