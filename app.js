//User input variable
var enter;
var confirmCharacter;
var confirmNumber;
var confirmLowercase;
var confirmUppercase;
//Password variable
    //Special character
    character=['<', '(', '[', '{', '\\', '^', '-', '=', '|', ']', '}', ')', '?', '*', '+', '.', '>', "!", "@", "#", "$", "%", "&", "'", ",", "/", "^", "_" , "~"]
    //Number character
    number=[1,2,3,4,5,6,7,8,9,0]
    //Alphabetical character
    alpha=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// space for Uppercase
space=[]

// Choices declared outside the if statement 
var choices;


// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);



// Get references to the #generate element
var get = document.querySelector("#generate");
get.addEventListener("click", function() {
    ps=generatePassword();
    document.getElementById("password").placeholder=ps;
});

//Start generating password
function generatePassword() {
// Step 1: Prompt for criteria
//  a. password length 8-128 characters
//  b. character types: lowercase, uppercase, numeric, and/or special characters
// Step 2: Validate the inputs
// Step 3: Generate password based on criteria
// Step 4: Display the password 
    enter=parseInt(prompt('How many characters would you like your password to contain? Choose between 8 and 128'));
    if (!enter) {
        alert('Need a value');
    } else if (enter < 8 || enter > 128) {
        enter=parseInt(prompt("Must between 8 and 128"));
    } else {
        //Continues if user input is validated
        confirmNumber=confirm("Will this contain numbers?");
        confirmCharacter=confirm("Will this contain special characters?");
        confirmUppercase=confirm("Will this contain uppercase letters?");
        comfirmLowercase=confirm("Will this contain lowercase number?");
    };
    //Else if for 4 negative options
    if(!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices=alert("You must choose a criteria!");
    }

    //First if statement that uses user input prompts to determine value
    //Else if for 4 positive options
    else if(confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
        choices=character.concat(number, alpha, alpha2);
    }

    //Else if for 3 positive options
    else if(confirmNumber && confirmLowercase && confirmUppercase) {
        choices=number.concat(alpha, alpha2);
    }
    else if(confirmCharacter && confirmNumber && confirmUppercase) {
        choices=character.concat(number, alpha2);
    }
    else if(confirmCharacter && confirmNumber && confirmLowercase) {
        choices=character.concat(number, alpha);
    }
    else if(confirmCharacter && confirmUppercase && confirmLowercase) {
        choices=character.concat(alpha2, alpha);
    }

    //Else if for 2 positive options
    else if(confirmCharacter && confirmNumber) {
        choices=character.concat(number);
    } else if(confirmCharacter && confirmUppercase) {
        choices=character.concat(alpha2);
    } else if(confirmCharacter && confirmLowercase) {
        choices=character.concat(alpha);
    } else if(confirmNumber && confirmUppercase) {
        choices=number.concat(alpha2);
    } else if(confirmNumber && confirmLowercase) {
        choices=number.concat(alpha);
    } else if(confirmUppercase && confirmLowercase) {
        choices=alpha2.concat(alpha);
    }

    //Else if for 1 positive option
    else if(confirmCharacter) {
        choices=character;
    } else if(confirmNumber) {
        choices=number;
    } else if(confirmLowercase) {
        choices=alpha;
    }
    //Created space variable to fill uppercase conversion
    else if(confirmUppercase) {
        choices=space.concat(alpha2);
    };

    //password variable is an array placeholder for user generated amount of length
    var password=[];
    //Start random selection variables:
    //Random selection for all variables:
    for (var i=0; i<enter; i++) {
        var pickChoices=choices[Math.floor(Math.random()*choices.length)];
        password.push(pickChoices);
    }
    
    var ps=password.join("");
    Userinput(ps);
    return ps;
}
//Password show in the box
function Userinput(ps) {
    document.getElementById("password").textContent=ps;
}