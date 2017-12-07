// 1. page load 2. store headers 3. ... x. Show header

// Store headers
var header0 = 'hi';
var header1 = 'hi there';
var header2 = 'welcome';

// Store & Generate Number
var maxRand = 3;
var randNum = Math.floor( Math.random() * maxRand );
console.log(randNum);

//  Show headers
$('h1').text( eval('header' + randNum) );