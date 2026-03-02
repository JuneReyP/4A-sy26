function testFunction(){
    // document.getElementById("demo").innerHTML = "You have changed the value!";
    // window.alert('This is an alert box!');
    // window.print();
    // alert('This is an alert box!');
    var check = confirm('Do you want to change the value?');
    alert(check);
    // if(check == true){
    //     document.getElementById("demo").innerHTML = "You have changed the value!";
    // }
    // ternary operator
    check == true ? document.getElementById("demo").innerHTML = "You have changed the value!" : document.getElementById("demo").innerHTML = "You have not changed the value!";
    
}

// function calculate(){
//     var num1 = parseFloat(document.getElementById("num1").value);
//     var num2 = parseFloat(document.getElementById("num2").value);
//     var operator = document.getElementById("operator").value;
    
//     switch(operator){
//         case '+':
//             document.getElementById("answer").innerHTML = num1 + num2;
//             break;
//         case '-':
//             document.getElementById("answer").innerHTML = num1 - num2;
//             break;
//         case '*':
//             document.getElementById("answer").innerHTML = num1 * num2;
//             break;
//         case '/':
//             document.getElementById("answer").innerHTML = num1 / num2;
//             break;
//         default:
//             document.getElementById("answer").innerHTML = "Invalid operator";
//     }
// }


    // var operator = document.getElementById("operator").value;
    
    switch(operator){
        case '+':
            document.getElementById("answer").innerHTML = num1 + num2;
            break;
        case '-':
            document.getElementById("answer").innerHTML = num1 - num2;
            break;
        case '*':
            document.getElementById("answer").innerHTML = num1 * num2;
            break;
        case '/':
            document.getElementById("answer").innerHTML = num1 / num2;
            break;
        default:
            document.getElementById("answer").innerHTML = "Invalid operator";
    }