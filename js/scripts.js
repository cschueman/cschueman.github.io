// 1. page load 2. store headers 3. ... x. Show header

// Store headers
var header0 = 'hi!';
var header1 = 'hello!';
var header2 = 'welcome to my website';

// Store & Generate Number
var maxRand = 3;
var randNum = Math.floor( Math.random() * maxRand );
console.log(randNum);

//  Show headers
$('h2').text( eval('header' + randNum) );