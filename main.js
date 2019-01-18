function call(){
    // getting the value of all the input fields
    var bill = document.getElementById('bill').value;
    var tip = document.getElementById('tip').value;
    var person = document.getElementById('person').value;

    // setting the value of calculated bill
    document.getElementById('perperson').value = Math.round(((Number(bill) + Number(tip))/Number(person)));
}

call();