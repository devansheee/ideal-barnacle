
//  1. Ways to print in Javascript
console.clear();
console.log("Heyo from Devanshee");
// alert('me!');
console.log(firstContainer);
firstContainer.innerHTML = "Hello There";
console.log(document.getElementsByTagName("h1")[0]);
document.getElementsByTagName("h1")[0].style.background = "yellow";
// document.write("This is document write"); this is not recomended by google

// 2. Javascript console API
console.warn("This is warning");
console.error("This is error");
console.assert(4 == 6);

console.clear();

// 3. Javascript Variables
var num1 = 31;
var num2 = 33;
 console.log(num1+num2);

//4. data types in JS

/* Primitive and Reference data types
1 Primitive: undefined, null, number, string, boolean, symbol
2 Reference: arrays, objects
 */

//strings
var str1 = 'string';

//objects
var marks ={
    dev: 10,
    jwa: 20,
    key: 15
}

//boolean
var a = true;
var b = false;

var und = undefined;
var undd;

//null : empty
var n = null;

console.log(marks);
console.log(a, b);
console.log(und, undd, n);


//array

var arr = [1,2,3,4,5];
var arr1 = [1,'hello', marks];

console.log(arr, arr1);

//operators in JS

//Arithmatic ops : +-/*
//Assignmnet ops : +=, *=, = -=, 
//Comparators:  ==, ===, >= , <=, <. >, <>
//logical ops : &&, ||, !
//conditional : if-else construct, 
//loops : for, forEach, while, do-while 


// 5. functions in JS
function avg(a, b){
    return (a+b)/2;
}

console.log(avg(1,2), avg(4,5));

let j=0; //block level scope. saves memory.

// 6. Array methods
let tempArr = ['fan', 'camera', 13, null, true];
console.log(tempArr.length);
tempArr.pop();
tempArr.push('Devanshee');
tempArr.shift();                                    //removes first element
tempArr.unshift('Friends');                         //adds element at first position
console.log(tempArr);
tempArr.toString();
tempArr.sort();                                     //sorts according to alphabetic sequence


// 7. String Methods
let tstring = "It's fun to learn";
console.log(tstring.length);
console.log(tstring.indexOf('fun'));
console.log(tstring.slice(0, 3));
console.log(tstring.replace("fun", "extreme fun"));

console.clear();

// 8. Dates in JS
let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());

console.clear();


// 9. DOM Manipulation

let btnelement = document.getElementById('firstContainer');
console.log(btnelement);

let elemclass = document.getElementsByClassName('test-class');
console.log(elemclass);
elemclass[0].classList.add('bg-primary');
elemclass[0].classList.add('text-success');

console.log(btnelement.innerHTML);
console.log(btnelement.innerText);

console.log(elemclass[0].innerHTML);
console.log(elemclass[0].innerText);


console.clear();

tn = document.getElementsByTagName('div');
console.log(tn);
createdElem = document.createElement('p');
createdElem.innerText = "This is the created paragraph.";
tn[0].appendChild(createdElem);

createdElem2 = document.createElement('b');
createdElem2.innerText = "This is created bold.";
tn[0].replaceChild(createdElem2, createdElem);

document.URL;
document.links;
document.location;
document.images;
document.domain;

// 10. Selecting using Query

select = document.querySelector('.container');
console.log(select);

select = document.querySelectorAll('.container');
console.log(select);


// 11. Events in JS
function clicked(){
    console.log('Button clicked');
}

let previousHTML = document.querySelectorAll('.container')[1].innerHTML;
console.log('prevHTML',previousHTML);

window.onload = function(){
    // console.log('The document was loaded');
    
}

firstContainer.addEventListener('click', function(){
    // console.log('container is clicked');
});

firstContainer.addEventListener('mouseover', function(){
    // console.log('mouse on container');
});

firstContainer.addEventListener('mouseout', function(){
    // console.log('mouse out container');
});

firstContainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = previousHTML;
    // console.log('mouse up when clicked on container');
});

firstContainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>";
    // console.log('mouse down on container');
});

console.clear();


// 12. Arrow Functions
addition = (a,b) => { return a + b; }

// 13. Set Timeout : achieve a task after some known time & Set Interval : do a task multiple times
logIt =() => { console.log('This is logged'); }
//setTimeout(logIt, 2000);

loggedInterval = ()=> { console.log('Logged every 2 mili seconds'); }

//clrint = setInterval(loggedInterval, 50);

//stopSetInterval = (clr) => { clearInterval(clr); }
//setTimeout(stopSetInterval(clrint), 1000);

// 14. use clearInterval(clr) and clearTime(clr) to cancel setInterval/setTimeout : TRY TO IMPLEMENT BOTH OF THIS SIMULTANEIUSLY

// 15. Local Storage in JS
localStorage.clear();
localStorage.setItem('name', 'devanshee');
console.log(localStorage.getItem('name'));

// 16. JSON
obj = {name: 'devanshee', length: 1}
js = JSON.stringify(obj);
console.log(js);
parsed = JSON.parse(`{"name":"deva", "length":1}`);
console.log(parsed);
