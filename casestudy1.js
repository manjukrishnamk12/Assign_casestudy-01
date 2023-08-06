// Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 


function isPrime(array) {
    fElement=array.shift();
    //console.log(fElement);
    if(fElement <= 1){
        console.log('The first elememt of the array is '+ fElement+' and not consider as prime');
    }else if (fElement == 2) {
        console.log('The first elememt of the array is '+ fElement+' and its a prime');
    }else{
        for(let i=2;i<fElement;i++){
            if (fElement%i==0) {
                console.log('The first elememt of the array is '+ fElement+' and its not a prime');
                return;
            }
        }
        console.log('The first elememt of the array is '+ fElement+' and its a prime');
    }
}
isPrime([23,10,54,67,80]);


// Write a JavaScript program to find the most frequent item of an array


var arr=[2,'ai','a',4,5,'a',9,'ai','k','ai','l','m','ai'];
//var arr=[1,2,4,3,2,1,5,3,6,7,2,3,1,1,1,1,1];
//var arr='manjukrishna';
var count=1; //frequent item count
var max=0;//to store the max no of each item
var item; //to store the frequent item
for (let k = 0; k < arr.length; k++) 
{
    for (let l = k; l < arr.length; l++)
    {
        if (arr[k] == arr[l])
            max++;
        if (count<max) 
        {
            count=max;
            item=arr[k];
        }
    }
    max=0;
}
console.log(item + ' :: ' + count + ' times');


// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.


for (let i = 0; i <=15; i++) {
    if (i%2==0) {
        console.log(i + ' ' + 'is an even number');
    }
    else
        console.log(i + ' ' + 'is an odd number');
}


// Write a JavaScript program to find the sum of squares of the elements of an array.


function sumOfsquare(array) {
    var sum=0;
    for (let j = 0; j < array.length; j++) {
        var sqre=array[j]*array[j];
        sum+=sqre;
    }
    console.log(sum);
}
sumOfsquare([5,8,9,10]);
