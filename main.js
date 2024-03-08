// Write down the table of two till 10, using for loop

for(let i=0; i<=10; i++){
    mul = 2 * i;
    console.log('2 x ' + i + "=" + mul)
}

// Ask user the number, and write down the table of that number till 10 in console

var table = prompt('Enter The Number Of Table Which You Want To Print');
table = parseInt(table);

for(let i=0; i<=10; i++){
    mul = table * i;
    console.log(table + " " + 'x' + i + "=" + ' ' + mul);
}

// Ask user if user want to SignUp, if yes, then ask the name of user, and add the username in an existing array, after all console the array

var user = prompt('do you want to sign up');

userName = [''];

if(user === 'yes'){
   userName = prompt('enter your name');
}

console.log(userName);