function doSomething(){
    console.log(3333);
}
console.log(2222);

// setTimeout(function(){
//     console.log('lazy and waiting');
// }, 4000)

//------------Using arrowfunction---------------

// setTimeout(() => {
//     console.log('See you later');
// }, 4000)


//--------------setInterval------------
setInterval(function(){
    console.log('doing it');
}, 3000)
//doSomething();
setTimeout(doSomething, 5000);
console.log(4444);
console.log(4444);
console.log(4444);
console.log(4444);