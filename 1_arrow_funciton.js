function sum(a, b) {
    return a + b;
}
console.log(sum(2,4))
//  anonymous function
const sub = function(a, b) {
    return a - b
}

console.log(sub(2, 1))
// arrow functon
const multiple = (a, b) => a * b ;

console.log(multiple(2,4))

const divide = (a, b) => a/ b;

console.log(divide(2, 1))
function sayHello () {
    console.log('Hello')
    console.log(this)
}
const btnClickMe = document.getElementById('btnClickme');
btnClickMe.addEventListener('click',sayHello );
btnClickMe.addEventListener('click',function () {
    console.log('Hello,world');
    console.log(this)
});
btnClickMe.addEventListener('click',() => {
    console.log('Hello arrow functon')
    console.log(this)
});
