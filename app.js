// /*
// Q1:
// 1. -9*3 => -27
// 2. "valye is " + 50 => value is 50
// 3. 17 % 5 => 2
// 4. 5 % 17 => 5
// 5. 5/10 => 0.5
// 6. (4==4) => True
// 7. (4 != 5) => True
// 8. (7 <= 8) => True
// 9. Math.ceil(2.4) => 3
// 9. Math.floor(6.3) => 6
// */


// //Q2:

let number = window.prompt("Q2." + "please enter number");
window.alert(number);

 //Q3.
 let num1 = window.prompt("Q3." + "please enter number");
 let num2 = window.prompt("Q3." + "please enter another number");

if (num1>num2) { 
    window.alert(num2);
    window.alert(num1);
} else if (num2>num1) {
    window.alert(num1);
    window.alert(num2);
}

//Q4.
let num3 = window.prompt("Q4." + "please enter number");
let num4 = window.prompt("Q4." + "please enter another number");

if (num3>=num4) { 
    window.alert(num3);
    } else if (num4>=num3)  {
        window.alert(num4);
    }

//Q5
let num5 = window.prompt("Q5." + "please enter number");
let num6 = window.prompt("Q5." + "please enter another number");
let sum = parseInt(num5) + parseInt(num6);
window.alert(parseInt(sum));

// //Q6
let num7=window.prompt("please enter number between 1 and 9") * 1;
switch (num7) {
    case 1:
        window.alert("ONE");
        break;
    case 2:
        window.alert("TWO");
        break;
    case 3:
        window.alert("THREE");
        break;
    case 4:
        window.alert("FOUR");
        break;
    case 5:
        window.alert("FIVE");
        break;
    case 6:
        window.alert("SIX");
        break;
    case 7:
        window.alert("SEVEN");
        break;
    case 8:
        window.alert("EIGHT");
        break;
    case 9:
        window.alert("NINE");
        break;
    default:
        window.alert("PLEASE TRY AGAIN");
        break;
}


// //Q7.

for (var i = 0; i <= 5; i++) {
    window.alert(i);
}

//Q8.
var numbers = "";

for (var i = 0; i <= 5; i++) {
    numbers += i + " ";
}

window.alert("Q8." + numbers);


//Q9.

let n=""
for (var i = 0; i <= 20; i+=3) {
    n+=i+" ";
}
window.alert(n);
//Q10.

let num8 = prompt("Q10."+"enter number between 0 and 100");

while (num8>100 || num8<0) {

        num8=prompt("please enter correct number");
}

alert(num8);


//Q11.

let something = prompt("Q11."+"enter something");
let word="";
    if(isNaN(something)){
    word = true;
    }
    else{
    word =   fale;
    }
    alert(word);



//Q12.

let num9 = prompt ("Q12."+"please enter number")
let nsum = 0;
for(let i=0;i<=num9;i++){
    nsum+=i;
}
alert(nsum);

//Q13.


sum=0;
let avg ="";
let num=prompt("entar nambar :");
for(i=0;i<=num;i++)
{
    sum=sum+i;

}
avg=sum/i;
window.alert(avg);





