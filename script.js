




function verify(Addmin){

    let password;

    if(username == "Admin"){
        password = prompt("Enter your password");
        password = prompt("Enter your password");
        message = (password == "TheMaster")? "Welcome" : 
                 (password == null)?  "Cancel" : "Wrong passowrd";
                  alert(message);
}             
else if(username == null){
alert("Conceled");
}
else{
    alert("I don't know you");
}
}

let username = prompt("Enter your user name");
verify(username);

message = (password == "TheMaster")? "Welcome" : (password == null)?  "Cancel" : "Wrong passowrd";
alert(message); 



let password;
let username = prompt("Enter your user name");
if(username == "Admin"){
    password = prompt("Enter your password");
    message = (password == "TheMaster")|| (password ==null)||(password == !"TheMaster")   
              alert(message);
}
            
else if(username == null){
alert("Conceled");
}
else{
    alert("I don't know you");
}




// function1 hands Admin users name;
// function2 handles the password

function getUsername(userName){
    userName = prompt("Who is there?");
    return userName;
}
function getPassword(userName){
    let password = prompt("password");
    return password;
}
function makingDecision(username, passord){


}


function ucFirstLetter(str){
    let len = str.length;
    let fUpperLetter = str.slice(0,1);
    let lCaseLetter = str.slice(1,str.len);
    let fCombinarion = fUpperLetter + lCaseLetter;
    return fCombinarion ;
}
ucFirstLetter("chile");



function ucFirstLetter(str){
    if(!str){
        return str;
    }
    return(str.charAt(0).toUpperCase() + str.slice(1));
 }
 
 ucFirstLetter("john");

 do {
    let str = prompt("enter string");
 }while(isNaN(str))


// No.1 Function to upper case the first letter, Your name should be unique
 function ucFirstLetter(str){
     
    if(isFinite(str)) 
    { return str;
        }
    else {
    
    return(str.charAt(0).toUpperCase() + str.slice(1));
    }
 }
 
 ucFirstLetter("chile");
// No.2 Check if viagra is in my string
 function checkSpam(str){
    let str1 = str.toLocaleLowerCase();
    return (str1.includes("viagra") || str1.includes("xxxxx"))
}
checkSpam("peter rabit");

// No. 3 please truncate my sentence it is too long
function truncate(str, maxlength){
    if (str.length > maxlength)

        return (str.slice(0, maxlength - 1) + '....')

}
truncate("This is the first of its kind", 20);
// No. 4 cureency extractor
function extractCurrency(str){
    str = prompt("Enter currency ");
        return (+str.slice(1))
    }
extractCurrency(str)

// Array Assignment

//No. 1

let fruits = ["Apple", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banna");

alert(fruits.length); // 4

//No. 2

let style =["Jazz", "Blues"];
style.push("Rock-n-Roll");
style[1] = "Classics";
style.shift();
style.unshift("Rap", "Raggae");
alert(style);

// No. 3

let arr = ["a", "b"];       // 'this is a key keyword that points to an object since array is a special kind of object it 
arr.push(function(){        // points to the array object and alert everything inside the array
    alert(this); })

arr[2]();

// No. 3 function to sum an array 
function sumInt(){
    let arr =[];
    let val;
    let sum = 0;
    while(true){
        val = prompt("Enter integer ");
        if(val === "" || val === null|| !isFinite(val))
            break;
            arr.push(+val);   
        
    }
     for( let i = 0; i < arr.length; i++){

        sum += arr[i];
     }
     console.log("The elements in the array are: " + arr);
    
     
    return "The sum = " + sum;

}
sumInt()



const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];


function lookUpProfile(name, prop) {
  // Only change code below this line
for (let i = 0; i < contacts.length; i++){
    if(prop in contacts[i] == true){
        return "I'm here";
    }
    else if (contacts[i].firstName == name ){
        return "Cool";
    }
    else {
        return "No such contacts";
    }
}
}





    

  

  // Only change code above this line


lookUpProfile("Akira", "likes");



