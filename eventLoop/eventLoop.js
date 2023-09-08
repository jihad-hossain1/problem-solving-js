const second = () => console.log('i am second');

const third = () => console.log('i am third');

const first = () => {
    console.log('i am first');
    setTimeout(second, 3000); // asynchronus --> callback Queue
    new Promise((resolve, reject) => resolve('i am write after third, before second')).then((resolve) => console.log(resolve)) //asynchronus--> microtask Queue
    third();
}

first();

console.log(typeof (queueMicrotask))